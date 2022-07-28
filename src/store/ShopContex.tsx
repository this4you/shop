import React, { PropsWithChildren } from "react";
import { ShopStore, CartStore } from "./store";

const ShopContext = React.createContext({} as ShopStore);


export const ShopProvider = ({ children }: PropsWithChildren) => {
    const cartStore = new CartStore();
    const shopStore = new ShopStore(cartStore);
    console.log("SHOP STORE CREATED");
    return (
        <ShopContext.Provider value={shopStore}>
            {children}
        </ShopContext.Provider>
    )
}

export const useShopStore = () => React.useContext(ShopContext);