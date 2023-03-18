import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.model';

@Injectable()
export class ProductService {

	constructor(@InjectModel(Product) private productRepository: typeof Product,
		private fileService: FilesService) { }

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
}
