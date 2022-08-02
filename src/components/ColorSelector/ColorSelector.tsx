import { useState } from 'react';
import './ColorSelector.scss';

type PropsType = {
    colors: ColorType[],
    onColorChanged?: (color: ColorType) => void,
    defColor?: ColorType
}

type ColorType = {
    id: string,
    value: string
}

const ColorSelector = ({ colors, defColor, onColorChanged }: PropsType) => {
    const [selected, setSelected] = useState(defColor || colors[0]);
    const onSelectColorHandler = (color: ColorType) => {
        setSelected(color);
        if (onColorChanged) {
            onColorChanged(color);
        }
    }
    return (
        <div className="color-selector">
            {colors.map((c) => {
                return <div key={c.id}
                    onClick={() => onSelectColorHandler(c)}
                    className={`color-selector_item ${selected.id === c.id && 'color-selector_item-active'}`}>
                    <div style={{ backgroundColor: c.value }} />
                </div>
            })}
        </div>
    )
}

export default ColorSelector;