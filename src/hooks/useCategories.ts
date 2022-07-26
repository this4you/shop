import { CategoryApi } from "api";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

type CategoryType = {
    name: string
}

const useCategories = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [categoryId, setCategoryId] = useState("");
    let location = useLocation();

    useEffect(() => {
        CategoryApi.getAll()
            .then(response => {
                setCategories(response.categories as CategoryType[]);
            })
    }, []);


    useEffect(() => {
        setCategoryId(location.pathname.slice(1));
    }, [location]);


    const getCurrentCategory = () => {
        if (categoryId) {
            return categoryId;
        } else if (categories.length > 0) {
            return categories[0].name;
        } else {
            return "";
        }
    }

    return {
        categories,
        currentCategory: getCurrentCategory()
    }
}

export default useCategories;