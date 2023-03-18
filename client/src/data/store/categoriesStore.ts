import { makeAutoObservable, runInAction } from 'mobx'
import { useAxios } from '../api/useAxios';

import { RootStore } from './rootStore'

export interface Category {
	id: number;
	title: string;
	description: string;
	icon: string;
	children: any[]
	parentId: number
	url: string
	isActive: boolean
	itemsCount: number
}


export class CategoriesStore {
	rootStore: RootStore
	categories: Category[] = []
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
		makeAutoObservable(this)
	}
	getAllCategories = async () => {
		const { data }: any = await useAxios({ url: 'categories/active', method: 'GET' })
		runInAction(() => {
			this.categories = data;
		})
	}
	get hotCategories() {
		const result: Category[] = []
		this.categories.forEach(elem => {
			elem.title.includes('Art') && elem.title !== 'Arts' ? result.push(elem) : null;
		})
		return result;
	}
}
