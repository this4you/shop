import ProductApi from "api/product-api";
import { throws } from "assert";
import { action, computed, makeObservable, observable } from "mobx";

const CURRENCY_KEY = "CURRENT_CURRENCY";
const DEF_CURRENCY_VALUE = localStorage.getItem(CURRENCY_KEY);

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
    gallery: string[];
    inStock: boolean;
    prices: PriceType[] 
}

export class ShopStore {
    currentCurrency: CurrencyType;
    products: ProductType[] = [];
    cartStore: CartStore;

     _currentCategory: string = "";
    get currentCategory() {
        return this._currentCategory;
    }
    get catalogueProduct() {
        return this.products.map(p => {
            const price = p.prices.find(p => p.currency.symbol === this.currentCurrency?.symbol);
            return {id: p.id, photo: p.gallery[0], name: p.name, inStock: p.inStock, price: `${price?.currency.symbol} ${price?.amount}`}
        });
    }
    set currentCategory(newCategory) {
        this._currentCategory = newCategory;
        this.loadProducts();
    }
    constructor(cartStore: CartStore) {
        makeObservable(this, {
            loadProducts: action,
            currentCurrency: observable,
            currentCategory: computed,
            _currentCategory: observable,
            products: observable,
            catalogueProduct: computed
        })
        this.cartStore = cartStore;
        this.currentCurrency = DEF_CURRENCY_VALUE && JSON.parse(DEF_CURRENCY_VALUE);
    }



    async loadProducts() {
        const response = await ProductApi.getAll(this.currentCategory);
        this.products = response.category.products as any;
    }
}


export class CartStore {

}