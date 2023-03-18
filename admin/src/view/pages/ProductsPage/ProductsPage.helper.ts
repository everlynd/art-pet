import { useAxios } from '../../../data/API';

export const fetchProducts = async (page = 0): Promise<any> => {
	const payload = {
		url: `product?page=${page}&limit=5`,
	};
	return await useAxios(payload)
}