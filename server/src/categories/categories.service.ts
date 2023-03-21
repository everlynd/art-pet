import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { appendChildrens, generateUrl } from 'src/helpers/helpers';
import { ProductService } from 'src/product/product.service';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {

	constructor(@InjectModel(Category) private categoryRepository: typeof Category,
		private productService: ProductService,
		private fileService: FilesService
	) { }

	async getAllCategories() {
		const allCategories = await this.categoryRepository.findAll()
		return appendChildrens(allCategories, [])
	}

	async addCategory(dto: CreateCategoryDto, images: any) {
		const candidate = await this.categoryRepository.findOne({ where: { title: dto.title } })
		if (candidate) {
			throw new HttpException('Category with same title already exist', HttpStatus.BAD_REQUEST)
		}
		const category = await this.categoryRepository.create(dto)
		if (images.length) {
			const fileName = await this.fileService.createFile(images)
			category.icon = fileName
		}
		category.url = generateUrl(category.title)
		category.children = [];
		category.isActive = true;
		category.itemsCount = 0
		await category.save()
		if (dto.rootCategory) {
			category.parentId = +dto.rootCategory
			await category.save();
		}
		return category;
	}

	async changeIsActive(categoryID: number) {
		const category = await this.categoryRepository.findByPk(categoryID)
		category.isActive = !category.isActive;
		await category.save();
		return category;
	}

	async getAllActiveCategories() {
		const categories = await this.categoryRepository.findAll({ where: { isActive: true } })
		const limits = { limit: 1000, page: 0 }
		const products = await this.productService.getProducts(limits)
		return appendChildrens(categories, products.allProducts)
	}


	async editCategory(newCategory: Category, images: any) {
		const updatedCategory = { ...newCategory }
		if (images.length) {
			const fileName = await this.fileService.createFile(images)
			updatedCategory.icon = fileName
		}
		const category = await this.categoryRepository.update({ ...updatedCategory }, { where: { id: newCategory.id } })
		return category;
	}

	async getCategory(id: number) {
		const category = await this.categoryRepository.findByPk(id)
		return category;
	}

	async findByUrl(url: string) {
		const category = await this.categoryRepository.findOne({ where: { url: url } });
		return category
	}
}
