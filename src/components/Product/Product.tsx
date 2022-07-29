import './Product.scss';

type Props = {
    photo: string,
    name: string,
    price: string
    inStock: boolean
}
const Product = ({name, photo, price, inStock}: Props) => {
    return (
        <div className="product">
            <div className="product_img" style={{ backgroundImage: `url(${photo})` }}>

            </div>
            {/* <img height={356} width={338} src={photo} alt="image"/> */}
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