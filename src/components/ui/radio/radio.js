import React from 'react';
import cls from './radio.module.sass';

const RadioButton = ({ label, name, checked, onChange, disabled }) => {
    return (
        <div className={cls.radioGroup}>
            <input
                type="radio"
                id={label}
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className={cls.radioInput}
            />
            <label htmlFor={label} className={disabled ? cls.disabledLabel : ''}>
                {label}
            </label>
        </div>
    );
};

export default RadioButton;
