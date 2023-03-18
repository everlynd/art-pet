import { makeAutoObservable, runInAction } from 'mobx'
import { useAxios } from '../api/useAxios';

import { RootStore } from './rootStore'

export interface Product {
	id: number;
	title: string;
	SKU: string;
	price: string;
	quantity: string;
	description: string;
	tags: string[] | string;
	images: any
	characteristics: CharacteristicValues[] | string;
	categoryId: number;
	rating: number;
	discount: number;
	discount_price: string;
}

interface CharacteristicValues {
	[key: string]: string;
}

export class ProductsStore {
	rootStore: RootStore
	products = [] as Product[]
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
		makeAutoObservable(this)
	}
	getAllProducts = async () => {
		const { data }: any = await useAxios({ url: 'product?page=0&limit=123', method: 'GET' })
		runInAction(() => {
			this.products = data.allProducts;
		})
	}

	get salesProducts() {
		const result: Product[] = []
		this.products.forEach(elem => {
			elem.discount ? result.push(elem) : null;
		})
		return result;
	}
}
