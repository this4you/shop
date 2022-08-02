import { ColorSelector, TextSelector } from 'components';
import './ProductAttributes.scss';

export type AttributesCollectionType = Array<{
    id: any;
    name: any;
    type: any;
    items: AttributeItemType[]
}>

export type AttributeItemType = {
    id: any;
    value: any;
    displayValue: any;
}

type Props = {
    attributes: AttributesCollectionType,
    onAttributeChange: (name: string, value: AttributeItemType) => void
};

const AttributeFactory = (type: string, items: AttributeItemType[], onAttributeChange: (value: AttributeItemType) => void) => {
    switch (type) {
        case "text":
            return <TextSelector items={items} onItemChanged= {onAttributeChange}/>;
        case "swatch":
            return <ColorSelector items={items} />;
    }
}

const ProductAttributes = ({ attributes, onAttributeChange }: Props) => {
    return (
        <div className="product-attributes">
            {
                attributes.map(a => {
                    return (
                        <div key={a.id} className="product-attributes_item">
                            <span>{`${a.name}:`}</span>
                            {
                                AttributeFactory(a.type, a.items, (value) => onAttributeChange(a.id, value))
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductAttributes;