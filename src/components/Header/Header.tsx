import { Categories, Logo, CartIcon, CurrencySelector } from 'components';
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
            <div className="header_icon">
                <Logo />
            </div>
            <div className="header_actions">
                <CurrencySelector />
                <CartIcon />
            </div>
        </div>
    );
}

export default Header;