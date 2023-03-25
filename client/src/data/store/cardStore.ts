import { makeAutoObservable, runInAction } from 'mobx'
import { useAxios } from '../api/useAxios';
import { Product } from './productStore';

import { RootStore } from './rootStore'

interface ICardItems {
  quantity: number;
  product: Product;
}

export class CardStore {
  rootStore: RootStore
  cardItems
  cardTotalPrice
  cardItemLength
  cardPopupIsOpen
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.cardTotalPrice = 0;
    this.cardItemLength = 0;
    this.cardItems = [] as ICardItems[];
    this.cardPopupIsOpen = false;
    makeAutoObservable(this)
  }

  calculateCardTotals() {
    this.cardItemLength = this.cardItems?.length ? this.cardItems.reduce((acc, curr) => acc + curr.quantity, 0) : 0;
    this.cardTotalPrice = this.cardItems?.length ? this.cardItems.reduce((acc, curr) => acc + curr.quantity * (curr.product.discount ? +curr.product.discount : +curr.product.price), 0) : 0
  }

  addToCard = async (product: Product, quantity: number) => {
    await useAxios({ url: '/cart/add', method: 'POST', data: { quantity: quantity, productId: product.id } })
    runInAction(() => {
      const isProductIn = this.cardItems.find(elem => elem.product.id === product.id)
      if (isProductIn) {
        isProductIn.quantity = isProductIn.quantity + quantity;
        this.calculateCardTotals();
        return;
      }
      this.cardItems = [...this.cardItems, { product: product, quantity: quantity }]
      this.calculateCardTotals();
    })
  }

  removeFromCard = async (id: number) => {
    await useAxios({ url: '/cart/remove', method: 'POST', data: { id: id } })
    runInAction(() => {
      this.cardItems = this.cardItems.filter((elem: any) => elem.product.id !== id)
      this.calculateCardTotals();
    })
  }

  getCartItems = async () => {
    const res = await useAxios({ url: '/cart/get-cart-items', method: 'GET' })
    runInAction(() => {
      this.cardItems = res?.data;
      this.calculateCardTotals();
    })
  }

  async getCartProduct(id: string) {
    runInAction(() => {
      // return this.cardItems.find((elem: Product) => elem.id = id)
    })
  }

  setCartPopup = () => {
    runInAction(() => this.cardPopupIsOpen = !this.cardPopupIsOpen)
  }

}
