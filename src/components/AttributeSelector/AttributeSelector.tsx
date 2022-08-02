import { AttributeItemType } from "components/ProductAttributes/ProductAttributes";
import { useState } from "react"
import './AttributeSelector.scss';

type AttributeSelectorType = {
    items: AttributeItemType[],
    onItemChanged?: (color: AttributeItemType) => void,
    defValue?: AttributeItemType
}

export type AttributeItemTypeExtended = AttributeItemType & { selected: boolean };

const AttributeSelector = (Component: React.ComponentType<AttributeItemTypeExtended>): React.FC<AttributeSelectorType> =>
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
                                <Component {...i} selected={i.value === selected.value} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }

export default AttributeSelector;