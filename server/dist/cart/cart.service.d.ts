import { JwtService } from '@nestjs/jwt';
import { ProductService } from 'src/product/product.service';
import { CartItem } from './cart.model';
export declare class CartService {
    private cartRepository;
    private jwtService;
    private productService;
    constructor(cartRepository: typeof CartItem, jwtService: JwtService, productService: ProductService);
    addToCart(dto: any, headers: any): Promise<{
        product: import("../product/product.model").Product;
        quantity: number;
    }>;
    getCartItems(headers: any): Promise<{
        product: import("../product/product.model").Product;
        quantity: number;
    }[]>;
    removeFromCart(id: number, headers: any): Promise<boolean>;
}
