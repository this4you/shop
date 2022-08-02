import AttributeSelector, { AttributeItemTypeExtended } from 'components/AttributeSelector/AttributeSelector';
import './TextSelector.scss';

const TextItem: React.FC<AttributeItemTypeExtended> = ({ value, selected }) => {
    return (
        <div className={`text-selector-item ${selected && 'text-selector-item-active'}`}>
            {value}
        </div>
    );
}

const TextSelector = AttributeSelector(TextItem);
export default TextSelector;