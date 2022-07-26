import { CurrencyApi } from "api";
import { useEffect, useState } from "react";
const CURRENCY_KEY = "CURRENT_CURRENCY";
const DEF_CURRENCY_VALUE = localStorage.getItem(CURRENCY_KEY);

export type CurrencyType = {
    label: string,
    symbol: string
}

const useCurrencies = () => {
    const [currencies, setCurrencies] = useState<CurrencyType[]>([]);
    const [currentCurrency, setCurrentCurrency] = useState<CurrencyType | undefined>(DEF_CURRENCY_VALUE && JSON.parse(DEF_CURRENCY_VALUE));

    const setCurrencyWithSave = (currency: CurrencyType) => {
        localStorage.setItem(CURRENCY_KEY, JSON.stringify(currency));
        setCurrentCurrency(currency);
    }

    useEffect(() => {
        CurrencyApi.getAll()
            .then(response => {
                setCurrencies(response.currencies as CurrencyType[]);
                if (!currentCurrency && response.currencies.length > 0) {
                    setCurrencyWithSave(response.currencies[0]);
                }
            })
    }, []);

    return {
        currencies,
        currentCurrency,
        setCurrentCurrency: setCurrencyWithSave
    }
}

export default useCurrencies;