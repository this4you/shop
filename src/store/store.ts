import ProductApi from "api/product-api";
import { action, computed, makeObservable, observable } from "mobx";

type CurrencyType = {
    symbol: string;
    label: string
}

type PriceType = {
    amount: number,
    currency: Partial<CurrencyType>
}

type ProductType = {
    id: string;
    name: string;
    gallery: [];
    inStock: boolean;
    prices: PriceType[] 
}

type CartType = {

}

export class ShopStore {
    currenctCurrency: CurrencyType = {} as CurrencyType;
    products: ProductType[] = [];
    cartStore: CartStore;

     _currentCategory: string = "";
    get currentCategory() {
        return this._currentCategory;
    }

    set currentCategory(newCategory) {
        this._currentCategory = newCategory;
        this.loadProducts();
    }
    constructor(cartStore: CartStore) {
        makeObservable(this, {
            loadProducts: action,
            currenctCurrency: observable,
            currentCategory: computed,
            _currentCategory: observable,
            products: observable
        })
        this.cartStore = cartStore;
    }



    async loadProducts() {
        const response = await ProductApi.getAll(this.currentCategory);
        this.products = response.category.products as any;
    }
}


export class CartStore {

}