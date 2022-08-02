import { useState } from 'react';
import './TextSelector.scss';

type PropsType = {
    items: TextItemType[],
    onItemChanged?: (item: TextItemType) => void,
    defItem?: TextItemType
}

type TextItemType = {
    id: string,
    value: string
}

const TextSelector = ({ items, defItem, onItemChanged }: PropsType) => {
    const [selected, setSelected] = useState(defItem || items[0]);
    const onSelectColorHandler = (color: TextItemType) => {
        setSelected(color);
        if (onItemChanged) {
            onItemChanged(color);
        }
    }
    return (
        <div className="text-selector">
            {items.map((c) => {
                return <div key={c.id}
                    onClick={() => onSelectColorHandler(c)}
                    className={`text-selector ${selected.id === c.id && 'text-selector_item-active'}`}>
                    {c.value}
                </div>
            })}
        </div>
    )
}

export default TextSelector;