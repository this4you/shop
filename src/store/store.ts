import { action, makeObservable, observable } from "mobx";

type CurrencyType = {
    symbol: string;
    label: string
}

type ProductType = {

}

type CartType = {

}

export class ShopStore {
    currentCategory: string = "";
    currenctCurrency: CurrencyType = {} as CurrencyType;
    products: ProductType[] = [];
    cartStore: CartStore

    constructor(cartStore: CartStore) {
        makeObservable(this, {
            loadProducts: action,
            currenctCurrency: observable,
            currentCategory: observable,
            products: observable
        })
        this.cartStore = cartStore;
    }

    loadProducts() {

    }
}


export class CartStore {

}