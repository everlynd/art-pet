import { FilesService } from 'src/files/files.service';
import { ProductService } from 'src/product/product.service';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesService {
    private categoryRepository;
    private productService;
    private fileService;
    constructor(categoryRepository: typeof Category, productService: ProductService, fileService: FilesService);
    getAllCategories(): Promise<any[]>;
    addCategory(dto: CreateCategoryDto, images: any): Promise<Category>;
    changeIsActive(categoryID: number): Promise<Category>;
    getAllActiveCategories(): Promise<any[]>;
    editCategory(newCategory: Category, images: any): Promise<[affectedCount: number]>;
    getCategory(id: number): Promise<Category>;
    findByUrl(url: string): Promise<Category>;
}
