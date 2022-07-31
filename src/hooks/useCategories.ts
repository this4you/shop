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
    const setCurrentCategory = (categoryName: string) => {
        if (categories.find(c => c.name === categoryName)) {
            store.currentCategory = categoryName;
        } else {
            store.currentCategory = categories[0]?.name;
        }
    }

    useEffect(() => {
        CategoryApi.getAll()
            .then(response => {
                setCategories(response.categories as CategoryType[]);
                setCurrentCategory(location.pathname.slice(1) || response.categories[0].name);
            })
    }, []);

    useEffect(() => {
        const categoryName = location.pathname.slice(1);
        setCurrentCategory(categoryName);
    }, [location, categories]);

    return {
        categories,
        currentCategory: store.currentCategory
    }
}

export default useCategories;