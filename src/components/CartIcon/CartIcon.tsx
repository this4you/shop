import './CartIcon.scss';
import cartIcon from 'icons/cart.svg'
const CartIcon = () => {
    return (
        <div>
            <img src={cartIcon} alt='cart' />
        </div>
    );
}

export default CartIcon;