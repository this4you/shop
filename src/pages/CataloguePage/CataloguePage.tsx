import { Product } from "components";
import { observer } from "mobx-react";
import { useShopStore } from "store/ShopContex";
import './CataloguePage.scss';

const CataloguePage = () => {
    const store = useShopStore();
    return (
        <div className="catalogue">
            <div className="catalogue_category">
                <h3>{store.currentCategory}</h3>
            </div>
            <div className="catalogue_products">
                {
                    store.catalogueProduct.map((p) =>
                        <Product key={p.id} {...p}></Product>)
                }
            </div>
        </div>
    )
}

export default observer(CataloguePage);