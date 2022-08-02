import AttributeSelector from 'components/AttributeSelector/AttributeSelector';
import { AttributeItemType } from 'components/ProductAttributes/ProductAttributes';
import React, { useState } from 'react';
import './ColorSelector.scss';
type Props = {
    id: string,
    value: string,
    displayValue: string
}
const ColorItem: React.FC<AttributeItemType> = ({ value }) => {
    return (
        <div className={`color-selector-item`}>
            <div style={{ backgroundColor: value }} />
        </div>
    );
}

const ColorSelector = AttributeSelector(ColorItem);


// const ColorSelector = ({ colors, defColor, onColorChanged }: PropsType) => {
//     const [selected, setSelected] = useState(defColor || colors[0]);
//     const onSelectColorHandler = (color: ColorType) => {
//         setSelected(color);
//         if (onColorChanged) {
//             onColorChanged(color);
//         }
//     }
//     return (
//         <div className="color-selector">
//             {colors.map((c) => {
//                 return <div key={c.id}
//                     onClick={() => onSelectColorHandler(c)}
//                     className={`color-selector_item ${selected.id === c.id && 'color-selector_item-active'}`}>
//                     <div style={{ backgroundColor: c.value }} />
//                 </div>
//             })}
//         </div>
//     )
// }

export default ColorSelector;