import AttributeSelector, { AttributeItemTypeExtended } from 'components/AttributeSelector/AttributeSelector';
import './ColorSelector.scss';

const ColorItem: React.FC<AttributeItemTypeExtended> = ({ value, selected }) => {
    return (
        <div className={`color-selector-item ${selected && 'color-selector-item-active'}`}>
            <div style={{ backgroundColor: value }} />
        </div>
    );
}

const ColorSelector = AttributeSelector(ColorItem);

export default ColorSelector;