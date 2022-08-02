import { ColorSelector } from 'components';
import './ProductAttributes.scss';

export type AttributesCollectionType = Array<{
    id: any;
    name: any;
    type: any;
    items: AttributeItemType[]
}>

type AttributeItemType = {
    id: any;
    value: any;
    displayValue: any;
}

type Props = {
    attributes: AttributesCollectionType
};

const SwitchRender = (type: string, items: AttributeItemType[]) => {
    switch (type) {
        case "text":
            return <h4>TEXT</h4>;
        case "swatch":
            return <ColorSelector colors={items}/>;
    }
}

const ProductAttributes = ({ attributes }: Props) => {
    return (
        <div className="product-attributes">
            {
                attributes.map(a => {
                    return (
                        <div key={a.id} className="product-attributes_item">
                            <span>{`${a.name}:`}</span>
                            {
                                SwitchRender(a.type, a.items)
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductAttributes;