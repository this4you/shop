import { Product } from "components";
import useProducts from "hooks/useProducts";
import { observer } from "mobx-react";
import { useShopStore } from "store/ShopContex";
import './CataloguePage.scss';

const CataloguePage = () => {
    const {products, currentCategory} = useProducts();
    return (
        <div className="catalogue">
            <div className="catalogue_category">
                <h3>{currentCategory}</h3>
            </div>
            <div className="catalogue_products">
                {
                    products.map((p) =>
                        <Product key={p.id} {...p}></Product>)
                }
            </div>
        </div>
    )
}

export default observer(CataloguePage);