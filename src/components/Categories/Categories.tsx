import './Categories.scss';
type Props = {
    categories: CategeryType[],
    currentCategoryId: string
};

type CategeryType = {
    id: string,
    name: string
}

const getActiveClass = (current: string, itemCategory: string) => {
    return current === itemCategory ? "categories_item-active" : "";
}

const Categories = ({ categories, currentCategoryId }: Props) => {
    return (
        <nav className="categories">
            {categories.map(c =>
                <span
                    key={c.id}
                    className={`categories_item ` + getActiveClass(currentCategoryId, c.id)}>
                    {c.name}
                </span>)
            }
            {/* <span className="categories_item categories_item-active">Woman</span>
            <span className="categories_item">Men</span>
            <span className="categories_item">Kids</span> */}
        </nav>
    );
}

export default Categories;