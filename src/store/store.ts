import ProductApi from "api/product-api";
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

    cartStore: CartStore;

    constructor(cartStore: CartStore) {
        makeObservable(this, {
            catalogueProducts: computed,
            loadProducts: action,
            currentCurrency: computed,
            currentCategory: computed,
            _currentCategory: observable,
            _currentCurrency: observable,
            _products: observable,
        })
        this.cartStore = cartStore;
        this._currentCurrency = DEF_CURRENCY_VALUE && JSON.parse(DEF_CURRENCY_VALUE);
    }

    _products: ProductType[] = [];
    _currentCategory: string = "";
    _currentCurrency: CurrencyType;

    get currentCurrency() {
        return this._currentCurrency;
    }

    set currentCurrency(newValue) {
        localStorage.setItem(CURRENCY_KEY, JSON.stringify(newValue));
        this._currentCurrency = newValue;
    }

    get currentCategory() {
        return this._currentCategory;
    }

    set currentCategory(newCategory) {
        this._currentCategory = newCategory;
        this.loadProducts();
    }

    get catalogueProducts() {
        return this._products.map(p => {
            const price = p.prices.find(p => p.currency.symbol === this.currentCurrency?.symbol);
            return { id: p.id, photo: p.gallery[0], name: p.name, inStock: p.inStock, price: `${price?.currency.symbol} ${price?.amount}` }
        });
    }

    async loadProducts() {
        if (!this.currentCategory) return;
        const response = await ProductApi.getAll(this.currentCategory);
        this._products = response.category.products as any;
    }
}


export class CartStore {

    items: [] = [];

    constructor() {
        makeObservable(this, {
            items: observable,
            count: computed
        })
    }

    get count() {
        return this.items.length;
    }
}