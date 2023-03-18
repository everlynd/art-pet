import { makeAutoObservable } from 'mobx'
import { CategoriesStore } from './categoriesStore';
import { ProductsStore } from './productStore';

export class RootStore {
	// cardStore = new CardStore(this)
	// favoriteStore = new FavoriteStore(this)
	// compareStore = new CompareStore(this)
	categoriesStore = new CategoriesStore(this)
	productsStore = new ProductsStore(this)
	constructor() {
		makeAutoObservable(this);
	}
}