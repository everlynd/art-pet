
export interface Product {
	id: number;
	title: string;
	quantity: number | null;
	price: string;
	SKU: string;
	description: string;
	tags: string[];
	characteristics: CharacteristicValues[];
	images: string[];
	categoryId: number | string;
	discount?: number | null;
	discount_price: string;
}

export interface CharacteristicValues {
	[key: string]: string;
}
