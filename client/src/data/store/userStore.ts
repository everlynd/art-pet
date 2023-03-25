import { makeAutoObservable, runInAction } from 'mobx'
import { useAxios } from '../api/useAxios';

import { RootStore } from './rootStore'


export class UserStore {
	rootStore: RootStore;
	isLogin = false;
	isToken = false;
	shouldNavigate = false;
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
		makeAutoObservable(this)
	}

	setIsLogin = () => {
		this.isLogin = true;
	}

	setIsToken = (token: string) => {
		localStorage.setItem('token', token)
		this.isToken = true;
	}

	userLogin = async (user: any) => {
		const res = await useAxios({ url: 'auth/login', method: "POST", data: { ...user } })
		localStorage.setItem('token', res?.data.token)
		runInAction(() => this.shouldNavigate = true)
	}
	unSetShouldNavigate = () => {
		runInAction(() => this.shouldNavigate = false)
	}
}
