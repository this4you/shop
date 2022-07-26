import { Categories, Logo, CartIcon, CurrencySelector } from 'components';
import './Header.scss';

const Header = () => {
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