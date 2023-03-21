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

export class CatalogStore {
	rootStore: RootStore
	products = [] as Product[]
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
		makeAutoObservable(this)
	}
	getCurrentProducts = async (id: any, filters?: any) => {
		const res = await useAxios({ url: `product/getByCategory`, method: 'POST', data: { id: id, filters: filters } })
		runInAction(() => {
			this.products = res?.data.products;
		})
	}
	get inStock() {
		const result: Product[] = []
		this.products.forEach(elem => {
			elem.quantity ? result.push(elem) : null;
		})
		return result.length;
	}

	get outOfStock() {
		const result: Product[] = []
		this.products.forEach(elem => {
			!elem.quantity ? result.push(elem) : null;
		})
		return result.length;
	}
}
