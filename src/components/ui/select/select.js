import React from 'react';
import cls from "./select.module.sass"

function Select() {
    return (
        <div className={cls.Select}>
            <div className={cls.selectContainer}>
                <label>Label</label>
                <select>
                    <option>Select</option>
                </select>
            </div>

            <div className={cls.selectContainer}>
                <label>Label</label>
                <select>
                    <option>Select</option>
                </select>
            </div>

            <div className={cls.selectContainer}>
                <label>Label</label>
                <select>
                    <option>Select</option>
                </select>
            </div>

            <div className={cls.selectContainer}>
                <label>Label</label>
                <select>
                    <option>Select</option>
                </select>
            </div>

            <div className={cls.selectContainer}>
                <label>Label</label>
                <select disabled>
                    <option>Select</option>
                </select>
            </div>
        </div>
    );
}

export default Select;
