import ProductApi from "api/product-api";
import { useEffect, useState } from "react";

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

type ProductType = PropType<Awaited<ReturnType<typeof ProductApi.get>>, "product">;

const useProductInfo = (id: string) => {
    const [product, setProduct] = useState<ProductType>();

    useEffect(() => {
        ProductApi.get(id)
            .then(response => {
                setProduct(response.product);
            })
    }, [id])

    return product;
}

export default useProductInfo;