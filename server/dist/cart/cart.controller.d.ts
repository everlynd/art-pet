import { CartService } from './cart.service';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    addToCart(dto: any, headers: any): Promise<{
        product: import("../product/product.model").Product;
        quantity: number;
    }>;
    getCartItems(headers: any): Promise<{
        product: import("../product/product.model").Product;
        quantity: number;
    }[]>;
    removeFromCart({ id }: {
        id: any;
    }, headers: any): Promise<boolean>;
}
