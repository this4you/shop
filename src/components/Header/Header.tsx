import Categories from 'components/Categories/Categories';
import './Header.scss';

const categories = [
    { id: "1", name: "WOMEN" },
    { id: "2", name: "man" },
    { id: "3", name: "kids" },
];

const Header = () => {
    return (
        <div className="header">
            <div className="header_categories">
                <Categories categories={categories} currentCategoryId={"1"} />
            </div>
            <div className="header_icon">icon</div>
            <div className="header_setting">setting</div>
        </div>
    );
}

export default Header;