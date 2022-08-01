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
                        <PhotoGallery photos={product.gallery as string[]} />
                    </div>
                    <div className="product-page_info">
                        <div className="product-page_info-inner">
                            <div className="product-page_info_name">
                                {product.name}
                            </div>
                            <div className="product-page_info_attributes">
                            </div>
                            <div className="product-page_info_price">
                            </div>
                            <button className="product-page_info_add-to-cart">
                                ADD TO CART
                            </button>
                            <div className="product-page_info_description" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                        </div>
                    </div>
                </div> :
                <h3>Product not found</h3>
            }
        </>
    )
}

export default observer(ProductPage);