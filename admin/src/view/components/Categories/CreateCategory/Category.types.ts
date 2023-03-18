export interface Category {
	title: string;
	isRoot: boolean;
	metaTitle?: string;
	metaDescription?: string;
	categoryBanner?: string[];
	rootCategory?: string;
	children: any[];
	isActive: boolean;
	id: number;
}

export interface RootCategory {
	children: any[];
	description: string | null;
	icon: string | null;
	id: number;
	parentId: string;
	title: string;
}