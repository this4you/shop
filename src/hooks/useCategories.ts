import { CategoryApi } from "api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useShopStore } from "store/ShopContex";

type CategoryType = {
    name: string
}

const useCategories = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const store = useShopStore();
    let location = useLocation();

    useEffect(() => {
        CategoryApi.getAll()
            .then(response => {
                setCategories(response.categories as CategoryType[]);
                store.currentCategory = location.pathname.slice(1) || response.categories[0].name;
            })
    }, []);


    useEffect(() => {
        store.currentCategory = location.pathname.slice(1);
    }, [location]);

    return {
        categories,
        currentCategory: store.currentCategory
    }
}

export default useCategories;