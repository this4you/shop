import { PhotoGallery } from "components";
import useProductInfo from "hooks/useProductInfo";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import './ProductPage.scss';
const ProductPage = () => {
    const { productId } = useParams();
    const product = useProductInfo(productId as string);
    console.log("Product" + product);
    return (
        <>
            {product ?
                <div className="product-page">
                    <div className="product-page_gallery">
                        <PhotoGallery photos={product.gallery as string[]}/>
                    </div>
                    <div className="product-page_info">
                        {/* {JSON.stringify(product)} */}
                    </div>
                </div> :
                <h3>Product not found</h3>
            }
        </>
    )
}

export default observer(ProductPage);