import './Product.scss';
import cart from 'icons/cart-white.svg';

type Props = {
    photo: string,
    name: string,
    price: string
    inStock: boolean
} & React.HTMLAttributes<HTMLDivElement>;

const Product = (props: Props) => {
    const {name, photo, price, inStock, ...rest} = props;
    return (
        <div {...rest} className={`${inStock ? 'product': 'product-out-of-stock'}`}>
            <div className="product_img" style={{ backgroundImage: `url(${photo})` }}/>
            <span className='product-out-of-stock_label'>{!inStock && "OUT OF STOCK"}</span>
            <span className="product_add-to-cart">
                <img src={cart} alt="add to cart" />
            </span>
            <div className="product_info">
                <div className="product_info_name">
                    {name}
                </div>
                <div className="product_info_price">
                    {price}
                </div>
            </div>
        </div>
    )
}

export default Product;