import React, { useState } from 'react';
import './CurrencySelector.scss';
import arrowTop from 'icons/arrow-top.svg';
import arrowDown from 'icons/arrow-down.svg';

const CurrencySelector = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('$')

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setOpen(!open);
    }

    return (
        <div onClick={handleClick} className='currency-selector'>
            <div className="currency-selector_value">
                {value}
            </div>
            <div className="currency-selector_checker">
                <img src={open ? arrowDown : arrowTop} alt="icon" />
            </div>
            <div className={`currency-selector_menu ${open ? 'currency-selector_menu-show' : ''}`}>
                <div className="currency-selector_menu_item">
                    $ USD
                </div>
                <div className="currency-selector_menu_item">
                    $ USD
                </div>
                <div className="currency-selector_menu_item">
                    $ USD
                </div>
            </div>
        </div>
    );
}

export default CurrencySelector;