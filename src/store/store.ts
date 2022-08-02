import ProductApi from "api/product-api";
import { AttributesCollectionType } from "components/ProductAttributes/ProductAttributes";
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
            loadProducts: action,
            currentCurrency: computed,
            currentCategory: computed,
            _currentCategory: observable,
            _currentCurrency: observable,
            products: observable,
        })
        this.cartStore = cartStore;
        this._currentCurrency = DEF_CURRENCY_VALUE && JSON.parse(DEF_CURRENCY_VALUE);
    }

    products: Product[] = [];
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

    async loadProducts() {
        if (!this.currentCategory) return;
        const response = await ProductApi.getAll(this.currentCategory);
        this.products = response.category.products.map(p => new Product(this, p.id, p.name, p.gallery, p.inStock, p.prices as PriceType[]));
    }

    async getProductInfo(id: string) {
        const p = await (await ProductApi.get(id)).product;
        return new Product(this, p.id, p.name, p.gallery as string[], p.inStock,
            p.prices as PriceType[], p.description, p.attributes as AttributesCollectionType);
    }
}

export class Product {

    constructor(
        private shopStore: ShopStore,
        public id: string,
        public name: string,
        public gallery: string[],
        public inStock: boolean,
        private prices: PriceType[],
        public description: string = "",
        public attributes?: AttributesCollectionType
    ) {
        makeObservable(this, {
            price: computed
        })
    }

    get price() {
        const price = this.prices.find(p => p.currency.symbol === this.shopStore.currentCurrency?.symbol);
        return `${price?.currency.symbol} ${price?.amount}`;
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