export declare class CreateProductDto {
    readonly title: string;
    readonly quantity: string;
    readonly description: string;
    readonly price: string;
    readonly sku: string;
    readonly tags: string[];
    readonly characteristics: CharacteristicValues[];
    readonly images: FormData;
    readonly categoryId: number;
    discount: number | string | null;
    discount_price: string | null;
    rating: number | string | null;
}
interface CharacteristicValues {
    [key: string]: string;
}
export {};
