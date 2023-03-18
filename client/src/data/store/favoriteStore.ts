import { makeAutoObservable, runInAction } from 'mobx'

import { RootStore } from './rootStore'

interface Product {
	id: string,
	quantity: number,
	price: number,
}


export class FavoriteStore {
	rootStore: RootStore
	favoriteItems
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
		this.favoriteItems = [] as Product[]
		makeAutoObservable(this)
	}

	addToFavorite(product: Product) {
		runInAction(() => {
			this.favoriteItems.push(product)
		})
	}

	removeFromFavorite(id: string) {
		runInAction(() => {
			this.favoriteItems = this.favoriteItems.filter(element => element.id !== id)
		})
	}

}
