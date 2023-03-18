import { Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Category } from './categories.model';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {

	constructor(private categoryService: CategoriesService) { }

	@Get()
	getAllCategories() {
		return this.categoryService.getAllCategories()
	}

	@Post('/add')
	@UseInterceptors(AnyFilesInterceptor())
	addCategory(@Body() dto: CreateCategoryDto, @UploadedFiles() categoryBanner: any) {
		return this.categoryService.addCategory(dto, categoryBanner)
	}

	@Post('/changeIsActive')
	changeIsActive(@Body() { categoryId }) {
		return this.categoryService.changeIsActive(categoryId)
	}

	@Get('/active')
	getAllActiveCategories() {
		return this.categoryService.getAllActiveCategories()
	}

	@Post('/get-category')
	getCategory(@Body() { id }) {
		return this.categoryService.getCategory(id);
	}

	@Post('/edit')
	@UseInterceptors(AnyFilesInterceptor())
	editCategory(@Body() newCategory: Category, @UploadedFiles() categoryBanner: any) {
		return this.categoryService.editCategory(newCategory, categoryBanner)
	}
}
