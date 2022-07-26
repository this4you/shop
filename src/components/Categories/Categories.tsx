import useCategories from 'hooks/useCategories';
import { NavLink } from 'react-router-dom';
import './Categories.scss';

const getActiveClass = (current: string, itemCategory: string) => {
    return current === itemCategory ? "categories_item-active" : "";
}

const Categories = () => {
    const {categories, currentCategory} = useCategories();
    return (
        <nav className="categories">
            {categories.map(c =>
                <NavLink
                    to={`/${c.name}`}
                    key={c.name}
                    className={`categories_item ` + getActiveClass(currentCategory, c.name)}>
                    {c.name}
                </NavLink>)
            }
        </nav>
    );
}

export default Categories;