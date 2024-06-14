import React from 'react';
import cls from './select.module.sass';

const Select = ({ children, disabled, style, onChange }) => {
    return (
        <div className={`${cls.selectWrapper} ${disabled ? cls.disabled : ''}`}>
            <label className={cls.article}>Label</label>
            <select
                style={style}
                disabled={disabled}
                className={cls.select}
                onChange={onChange}>

                {children}
            </select>
        </div>
    );
};


export default Select;
