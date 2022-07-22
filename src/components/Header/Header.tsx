import Categories from 'components/Categories/Categories';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header_categories">
                <Categories categories={[]} currentCategoryId={""}/>
            </div>
            <div className="header_icon">icon</div>
            <div className="header_setting">setting</div>
        </div>
    );
}

export default Header;