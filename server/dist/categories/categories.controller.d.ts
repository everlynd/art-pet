import { Category } from './categories.model';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesController {
    private categoryService;
    constructor(categoryService: CategoriesService);
    getAllCategories(): Promise<any[]>;
    addCategory(dto: CreateCategoryDto, categoryBanner: any): Promise<Category>;
    changeIsActive({ categoryId }: {
        categoryId: any;
    }): Promise<Category>;
    getAllActiveCategories(): Promise<any[]>;
    getCategory({ id }: {
        id: any;
    }): Promise<Category>;
    editCategory(newCategory: Category, categoryBanner: any): Promise<[affectedCount: number]>;
}
