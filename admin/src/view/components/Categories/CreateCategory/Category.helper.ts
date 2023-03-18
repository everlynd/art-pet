import { useAxios } from '../../../../data/API';
import { Category } from './Category.types';


export const createCategory = async (category: Category) => {
	const formData = new FormData();
	for (const [key, value] of Object.entries(category)) {
		if (typeof value === 'object' && key === 'categoryBanner') {
			for (const [subKey, subValue] of Object.entries(value)) {
				formData.append(`${key}`, subValue as any);
			}
			continue;
		}
		formData.append(key, value)
	}
	const payload = {
		url: `categories/add`,
		method: 'POST',
		data: formData
	};
	try {
		return await useAxios(payload)
	} catch (e) {
		console.log(e)
	}

}


export const getAllCategories = async () => {

	const payload = {
		url: 'categories',
		method: 'GET'
	}

	return await useAxios(payload)
}


export const changeIsActive = async (categoryId: number) => {
	const payload = {
		url: 'categories/changeIsActive',
		method: 'POST',
		data: { categoryId }
	}
	await useAxios(payload)
}


export const CategoryLoader = async ({ _, params }: any) => {
	const { id } = params;
	const res = await useAxios({ url: 'categories/get-category', method: 'POST', data: { id: id } })
	console.log(res)
	return { category: res?.data, id: id }
}

export const updateCategory = async (category: Category) => {
	console.log(category)
	const formData = new FormData();
	for (const [key, value] of Object.entries(category)) {
		if (typeof value === 'object' && key === 'categoryBanner') {
			for (const [subKey, subValue] of Object.entries(value)) {
				formData.append(`${key}`, subValue as any);
			}
			continue;
		}
		formData.append(key, value)
	}
	const payload = {
		url: `categories/edit`,
		method: 'POST',
		data: formData
	};
	try {
		return await useAxios(payload)
	} catch (e) {
		console.log(e)
	}
} 