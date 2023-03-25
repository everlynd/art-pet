import { makeAutoObservable } from 'mobx'
import { CardStore } from './cardStore';
import { CatalogStore } from './catalogStore';
import { CategoriesStore } from './categoriesStore';
import { ProductsStore } from './productStore';
import { UserStore } from './userStore';

export class RootStore {
	cardStore = new CardStore(this)
	// favoriteStore = new FavoriteStore(this)
	// compareStore = new CompareStore(this)
	userStore = new UserStore(this);
	categoriesStore = new CategoriesStore(this);
	productsStore = new ProductsStore(this);
	catalogStore = new CatalogStore(this);
	constructor() {
		makeAutoObservable(this);
	}
}