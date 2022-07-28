import { observer } from "mobx-react";
import { useShopStore } from "store/ShopContex";

const CataloguePage = () => {
    const store = useShopStore();
    return (
        <div className="catalogue">
            <div className="catalogue_category">
                <h3>{store.currentCategory}</h3>
            </div>
        </div>
    )
}

export default observer(CataloguePage);