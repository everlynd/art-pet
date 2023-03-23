import { makeAutoObservable, runInAction } from 'mobx'
import { useAxios } from '../api/useAxios';
import { Product } from './productStore';

import { RootStore } from './rootStore'

interface ICardItems {
  qty: number;
  pt: Product;
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
    this.cardItemLength = this.cardItems.reduce((acc, curr) => acc + curr.qty, 0)
    console.log(this.cardItems.reduce((acc, curr) => (acc + +curr.pt.price) * curr.qty, 0))
  }

  addToCard = async (product: Product, quantity: number) => {
    const res = await useAxios({ url: '/cart/add', method: 'POST', data: { quantity: quantity, productId: product.id } })
    console.log(res)
    // runInAction(() => {
    //   this.cardItems.push({ qty: quantity, pt: product })
    //   this.calculateCardTotals()
    // })
  }

  getCartItems = async() => {
    const res = await useAxios({ url: '/cart/get-cart-items', method: 'GET'})
    console.log(res)
  }

  removeFromCard(product: Product) {
    runInAction(() => {
      // this.cardItems = this.cardItems.filter(element => element !== product)
      // this.calculateCardTotals()
    })
  }

  // setProductQuantity(sign: string, id: string) {
  //   runInAction(() => {
  //     const product = this.cardItems.find(element => element.id = id) as Product
  //     if (sign === 'increase') {
  //       product.quantity = product.quantity + 1;
  //     }
  //     if (sign === 'decrease') {
  //       product.quantity = product.quantity - 1;
  //     }
  //     this.calculateCardTotals()
  //   })
  // }

  getCartProduct(id: string) {
    runInAction(() => {
      // return this.cardItems.find((elem: Product) => elem.id = id)
    })
  }

  setCartPopup() {
    this.cardPopupIsOpen = !this.cardPopupIsOpen
  }
}
