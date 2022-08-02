import { AttributeItemType } from "components/ProductAttributes/ProductAttributes";
import { useState } from "react"
import './AttributeSelector.scss';

type AttributeSelectorType = {
    items: AttributeItemType[],
    onItemChanged?: (color: AttributeItemType) => void,
    defValue?: AttributeItemType
}

const AttributeSelector = (Component: React.ComponentType<AttributeItemType>): React.FC<AttributeSelectorType> =>
    function Comp({ items, defValue, onItemChanged }: AttributeSelectorType) {
        const [selected, setSelected] = useState(defValue || items[0]);

        const onSelectHandler = (item: AttributeItemType) => {
            setSelected(item);
            if (onItemChanged) {
                onItemChanged(item);
            }
        }

        return (
            <div className="attribute-selector">
                {
                    items.map((i) => {
                        return (
                            <div key={i.id} className="attribute-selector_item" onClick={() => onSelectHandler(i)}>
                                <Component {...i} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }

export default AttributeSelector;