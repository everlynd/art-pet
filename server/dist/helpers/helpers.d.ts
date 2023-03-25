import { Category } from 'src/categories/categories.model';
import { Product } from 'src/product/product.model';
type GenerateId = () => string;
export declare const generateId: GenerateId;
type GenerateUrl = (url: string) => string;
export declare const generateUrl: GenerateUrl;
export declare const appendChildrens: (array: Category[], products: Product[]) => any[];
export {};
