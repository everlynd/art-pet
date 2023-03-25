import { Model } from 'sequelize-typescript';
interface ProductCreationAttributes {
    title: string;
    quantity: string;
    price: string;
    SKU: string;
    description: string;
    characteristics: CharacteristicValues[];
    tags: string[];
    images: any;
    categoryId: number;
}
interface CharacteristicValues {
    [key: string]: string;
}
export declare class Product extends Model<Product, ProductCreationAttributes> {
    id: number;
    title: string;
    SKU: string;
    price: string;
    quantity: string;
    description: string;
    tags: string[];
    images: any;
    characteristics: CharacteristicValues[];
    categoryId: number;
    rating: number;
    discount: number;
    discount_price: string;
}
export {};
