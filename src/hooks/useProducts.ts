import { useShopStore } from "store/ShopContex";

const useProducts = () => {
    const store = useShopStore();
    return {
        products: store.products,
        currentCategory: store.currentCategory
    };
}

export default useProducts;