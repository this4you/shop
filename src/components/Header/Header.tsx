import { CategoryApi } from 'api';
import { Categories, Logo, CartIcon, CurrencySelector } from 'components';
import { useEffect } from 'react';
import './Header.scss';

const categories = [
    { id: "1", name: "WOMEN" },
    { id: "2", name: "man" },
    { id: "3", name: "kids" },
];

const Header = () => {
    useEffect(() => {
        CategoryApi.getAllCategories();
    }, [])

    return (
        <div className="header">
            <div className="header_categories">
                <Categories />
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