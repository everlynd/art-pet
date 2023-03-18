import { useAxios } from '../../../data/API'
import { Product } from './ProductCreateHelper.types'

export interface ProductLoaderInterface {
	product: Product,
	categories: Category[],
	productID: string,
}

interface Category {
	id: number;
	title: string;
	description?: any;
	icon?: any;
	children: any[];
	parentId?: any;
	itemsCount: number;
	url: string;
	isActive: boolean;
}

export const getAllActiveCategories = async () => {
	const payload = {
		url: 'categories/active',
		method: 'GET',
	}
	return await useAxios(payload)
}

export const recursiveAppend = (formData: any, obj: any) => {
	Object.entries(obj).forEach(([key, value]: any) => {
		if (typeof value === 'object' && key === 'images') {
			for (const [subKey, subValue] of Object.entries(value)) {
				formData.append(`${key}`, subValue as any);
			}
			return;
		}
		if (typeof value === 'object' && key !== 'images') {
			value = JSON.stringify(value);
			formData.append(key, value);
			return;
		}
		formData.append(key, value);
	});
};

export const createProduct = async (payload: any) => {
	return await useAxios({ url: 'product/create', method: 'POST', data: payload });
}

export const updateProduct = async (payload: any) => {
	return await useAxios({ url: 'product/update', method: 'POST', data: payload })
}

export const ProductPageLoader = async ({ _, params }: any) => {
	const { id } = params;
	const [categories, product]: any = await Promise.allSettled([getAllActiveCategories(), id ? useAxios({ url: 'product/get-product', method: 'POST', data: { id: id } }) : null])
	return { product: product?.value?.data, categories: categories?.value?.data, productID: id }
};

const isJsonString = (str: string) => {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

export const parseTags = (tags: any) => {
	if (isJsonString(tags)) {
		return JSON.parse(tags).map((elem: any) => {
			if (elem.name) {
				return { name: elem.name }
			} else {
				return { name: elem }
			}
		})
	} else {
		return [];
	}
};

export const localePrice = (price: string) =>
	new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(+price);