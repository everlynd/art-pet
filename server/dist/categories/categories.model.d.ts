import { Model } from 'sequelize-typescript';
interface CategoryCreationAttributes {
    title: string;
}
export declare class Category extends Model<Category, CategoryCreationAttributes> {
    id: number;
    title: string;
    description: string;
    icon: string;
    children: any[];
    parentId: number;
    itemsCount: number;
    url: string;
    isActive: boolean;
}
export {};
