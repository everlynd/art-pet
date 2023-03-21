import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CategoriesService } from 'src/categories/categories.service';
import { FilesService } from 'src/files/files.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.model';
import { Op } from 'sequelize'
import sequelize from 'sequelize';
@Injectable()
export class ProductService {

	constructor(@InjectModel(Product) private productRepository: typeof Product,
		private fileService: FilesService,
		@Inject(forwardRef(() => CategoriesService)) private categoryService: CategoriesService) { }

	async getProducts(limits: { limit: number, page: number }) {
		const totalProducts = await this.productRepository.findAll({ include: { all: true } })
		const allProducts = await this.productRepository.findAll({ include: { all: true }, limit: +limits.limit, offset: +limits.page * +limits.limit })
		return { allProducts, total: Math.ceil(totalProducts.length / limits.limit) };
	}

	async createProduct(dto: CreateProductDto, images: any) {
		if (dto.rating === 'null') {
			dto.rating = null;
		}
		if (dto.discount === '') {
			dto.discount = null;
		} else {
			dto.discount_price = String((+dto.price * (100 - +dto.discount)) / 100)
		}
		if (dto.discount_price === 'null') {
			dto.discount_price = null;
		}
		const fileNames = await Promise.all<string[]>(images.images.map(async (img: string) => {
			return await this.fileService.createFile(img);
		}))
		const product = await this.productRepository.create({ ...dto, images: fileNames });
		return product;
	}

	async getProduct(id: number) {
		const product = await this.productRepository.findByPk(id);
		return product;
	}

	async updateProduct(dto: any) {
		if (dto.rating === 'null') {
			dto.rating = null;
		}
		if (dto.discount === '') {
			dto.discount = null;
		} else {
			dto.discount_price = String((+dto.price * (100 - +dto.discount)) / 100)
		}
		if (dto.discount_price === 'null') {
			dto.discount_price = null;
		}
		const product = await this.productRepository.update({ ...dto, }, { where: { id: dto.id } })
		return product
	}

	async getProductsByCategory(id: any, filters: any) {
		const from = filters?.from || '0';
		const to = filters?.to || '99999999';
		const category = await this.categoryService.findByUrl(id);
		if (!category) {
			const products = await this.productRepository.findAll({ where: [sequelize.where(sequelize.cast(sequelize.col(`price`), 'SIGNED'), { [Op.gte]: +from, [Op.lte]: +to })], })
			return { products: products, filters: {} };
		}
		const categoryId = category.id || ''
		const products = await this.productRepository.findAll({ where: [sequelize.where(sequelize.cast(sequelize.col(`price`), 'SIGNED'), { [Op.gte]: +from, [Op.lte]: +to }), { categoryId: categoryId }], })
		return { products: products, filters: {} };
	}
}
