import { observer } from "mobx-react";
import { useShopStore } from "store/ShopContex";

const CatalogPage = () => {
    const store = useShopStore();
    return <h1>{JSON.stringify(store.products)}</h1>
}

export default observer(CatalogPage);