import ProductApi from "api/product-api";
import { useEffect, useState } from "react";
import { useShopStore } from "store/ShopContex";
import { Product } from "store/store";


const useProductInfo = (id: string) => {
    const [product, setProduct] = useState<Product>();
    const store = useShopStore();
    useEffect(() => {
        store.getProductInfo(id).then(response => {
            setProduct(response);
        })
    }, [id])

    return product;
}

export default useProductInfo;