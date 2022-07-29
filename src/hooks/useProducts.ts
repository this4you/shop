import { useShopStore } from "store/ShopContex";

const useProducts = () => {
    const store = useShopStore();
    return {
        products: store.catalogueProducts,
        currentCategory: store.currentCategory
    };
}

export default useProducts;