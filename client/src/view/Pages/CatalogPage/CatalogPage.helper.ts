import { useAxios } from '../../../data/api/useAxios';


export const CatalogLoader = async ({ _, params }: any) => {
	const { id } = params;
	const res = await useAxios({ url: `product/getByCategory`, method: 'POST', data: { id: id } })
	return { products: res?.data.products, filters: res?.data.filters }
}

export const catalogChanger = async (id:any, filters:any) => {
	const res = await useAxios({ url: `product/getByCategory`, method: 'POST', data: { id: id, filters: filters } })
	return { products: res?.data.products, filters: res?.data.filters }
}