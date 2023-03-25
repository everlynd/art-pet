import { Model } from 'sequelize-typescript';
interface ItemCreatingAttribute {
    quantity: number;
}
export declare class CartItem extends Model<CartItem, ItemCreatingAttribute> {
    id: number;
    quantity: number;
    productId: number;
    userId: number;
}
export {};
