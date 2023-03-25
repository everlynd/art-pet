import { CategoriesService } from 'src/categories/categories.service';
import { FilesService } from 'src/files/files.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.model';
export declare class ProductService {
    private productRepository;
    private fileService;
    private categoryService;
    constructor(productRepository: typeof Product, fileService: FilesService, categoryService: CategoriesService);
    getProducts(limits: {
        limit: number;
        page: number;
    }): Promise<{
        allProducts: Product[];
        total: number;
    }>;
    createProduct(dto: CreateProductDto, images: any): Promise<Product>;
    getProduct(id: number): Promise<Product>;
    updateProduct(dto: any): Promise<[affectedCount: number]>;
    getProductsByCategory(id: any, filters: any): Promise<{
        products: Product[];
        filters: {};
    }>;
}
