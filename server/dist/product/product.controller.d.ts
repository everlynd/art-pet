import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.model';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProducts(limits: {
        limit: number;
        page: number;
    }): Promise<{
        allProducts: Product[];
        total: number;
    }>;
    createProduct(images: any, dto: CreateProductDto): Promise<Product>;
    getProduct({ id }: {
        id: any;
    }): Promise<Product>;
    updateProduct(dto: Product): Promise<[affectedCount: number]>;
    getProductsByCategory({ id, filters }: {
        id: any;
        filters: any;
    }): Promise<{
        products: Product[];
        filters: {};
    }>;
}
