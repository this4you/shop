import { CurrencyApi } from "api";
import { useEffect, useState } from "react";
import { useShopStore } from "store/ShopContex";
const CURRENCY_KEY = "CURRENT_CURRENCY";

export type CurrencyType = {
    label: string,
    symbol: string
}

const useCurrencies = () => {
    const [currencies, setCurrencies] = useState<CurrencyType[]>([]);
    const store = useShopStore();
    // const [currentCurrency, setCurrentCurrency] = useState<CurrencyType | undefined>(DEF_CURRENCY_VALUE && JSON.parse(DEF_CURRENCY_VALUE));

    const setCurrencyWithSave = (currency: CurrencyType) => {
        localStorage.setItem(CURRENCY_KEY, JSON.stringify(currency));
        store.currentCurrency = currency;
    }

    useEffect(() => {
        CurrencyApi.getAll()
            .then(response => {
                setCurrencies(response.currencies as CurrencyType[]);
                if (!store.currentCurrency && response.currencies.length > 0) {
                    setCurrencyWithSave(response.currencies[0]);
                }
            })
    }, []);

    return {
        currencies,
        currentCurrency: store.currentCurrency,
        setCurrentCurrency: setCurrencyWithSave
    }
}

export default useCurrencies;