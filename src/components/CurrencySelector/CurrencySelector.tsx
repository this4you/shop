import React, { useState } from 'react';
import './CurrencySelector.scss';
import arrowTop from 'icons/arrow-top.svg';
import arrowDown from 'icons/arrow-down.svg';
import useCurrencies, { CurrencyType } from 'hooks/useCurrencies';

const CurrencySelector = () => {
    const [open, setOpen] = useState(false);
    const { currencies, currentCurrency, setCurrentCurrency } = useCurrencies();

    const handleSelectorClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setOpen(!open);
    }

    const handleMenuItemClick = (currency: CurrencyType) => {
        setCurrentCurrency(currency);
    }

    return (
        <div onClick={handleSelectorClick} className='currency-selector'>
            <div className="currency-selector_value">
                {currentCurrency?.symbol}
            </div>
            <div className="currency-selector_checker">
                <img src={open ? arrowDown : arrowTop} alt="icon" />
            </div>
            <div className={`currency-selector_menu ${open ? 'currency-selector_menu-show' : ''}`}>
                {currencies.map((c) =>
                    <div key={c.label} className="currency-selector_menu_item" onClick={() => handleMenuItemClick(c)}>
                        {`${c.symbol} ${c.label}`}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CurrencySelector;