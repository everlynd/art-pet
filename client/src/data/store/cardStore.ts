import { makeAutoObservable, runInAction } from 'mobx'

import { RootStore } from './rootStore'

interface Product {
  id: string,
  quantity: number,
  price: number,
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
    this.cardItems = [] as Product[];
    this.cardPopupIsOpen = false;
    makeAutoObservable(this)
  }

  calculateCardTotals() {
    this.cardTotalPrice = this.cardItems.reduce((acc, curr) => (acc + curr.price) * curr.quantity, 0)
    this.cardItemLength = this.cardItems.reduce((acc, curr) => acc + curr.quantity, 0)
  }

  addToCard(product: Product) {
    runInAction(() => {
      this.cardItems.push(product)
      this.calculateCardTotals()
    })
  }

  removeFromCard(product: Product) {
    runInAction(() => {
      this.cardItems = this.cardItems.filter(element => element !== product)
      this.calculateCardTotals()
    })
  }

  setProductQuantity(sign: string, id: string) {
    runInAction(() => {
      const product = this.cardItems.find(element => element.id = id) as Product
      if (sign === 'increase') {
        product.quantity = product.quantity + 1;
      }
      if (sign === 'decrease') {
        product.quantity = product.quantity - 1;
      }
      this.calculateCardTotals()
    })
  }

  getCartProduct(id: string) {
    runInAction(() => {
      return this.cardItems.find((elem: Product) => elem.id = id)
    })
  }

  setCartPopup() {
    this.cardPopupIsOpen = !this.cardPopupIsOpen
  }
}
