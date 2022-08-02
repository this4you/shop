import { Product } from "components";
import useProducts from "hooks/useProducts";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import './CataloguePage.scss';

const CataloguePage = () => {
    const { products, currentCategory } = useProducts();
    const navigate = useNavigate();
    const openProductPage = (id: string) => {
        navigate(`/product/${id}`);
    }
    return (
        <div className="catalogue">
            <div className="catalogue_category">
                <h3>{currentCategory}</h3>
            </div>
            <div className="catalogue_products">
                {
                    products.map((p) => {
                        const { gallery, price, ...rest } = p;
                        return (<Product onClick={() => openProductPage(p.id)} key={p.id} photo={gallery[0]} price={price}  {...rest}></Product>)
                    })
                }
            </div>
        </div>
    )
}

export default observer(CataloguePage);