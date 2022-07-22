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
        </nav>
    );
}

export default Categories;