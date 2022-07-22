import './Categories.scss';
type Props = {
    categories: [],
    currentCategoryId: string
};


const Categories = ({categories, currentCategoryId}: Props) => {
    return (
        <nav className="categories">
            <span className="categories_item categories_item-active">Woman</span>
            <span className="categories_item">Men</span>
            <span className="categories_item">Kids</span>
        </nav>
    );
}

export default Categories;