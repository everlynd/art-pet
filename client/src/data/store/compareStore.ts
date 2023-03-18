import { makeAutoObservable, runInAction } from 'mobx'

import { RootStore } from './rootStore'

interface Product {
	id: string,
	quantity: number,
	price: number,
}


export class CompareStore {
	rootStore: RootStore
	compareItems
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
		this.compareItems = [] as Product[]
		makeAutoObservable(this)
	}

	addToFavorite(product: Product) {
		runInAction(() => {
			this.compareItems.push(product)
		})
	}

	removeFromFavorite(id: string) {
		runInAction(() => {
			this.compareItems = this.compareItems.filter(element => element.id !== id)
		})
	}

}
