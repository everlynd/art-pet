import { Body, Controller, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

	constructor(private productService: ProductService) { }

	@Get()
	getProducts(@Query() limits: { limit: number, page: number }) {
		return this.productService.getProducts(limits)
	}

	@Post('/create')
	@UseInterceptors(FileFieldsInterceptor([
		{ name: 'images', maxCount: 100000 },
	]))
	createProduct(@UploadedFiles() images: any, @Body() dto: CreateProductDto) {
		return this.productService.createProduct(dto, images)
	}

	@Post('/get-product')
	getProduct(@Body() { id }) {
		return this.productService.getProduct(id)
	}

	@Post('/update')
	@UseInterceptors(FileFieldsInterceptor([
		{ name: 'images', maxCount: 100000 },
	]))
	updateProduct(@Body() dto: Product) {
		return this.productService.updateProduct(dto)
	}

	@Post('/getByCategory')
	getProductsByCategory(@Body() { id, filters }) {
		return this.productService.getProductsByCategory(id, filters);
	}
}
