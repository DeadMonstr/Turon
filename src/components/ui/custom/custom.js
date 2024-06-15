import React from 'react';
import Select, { components } from 'react-select';

const CustomOption = (props) => {
    return (
        <components.Option {...props}>
            <div
                style={{
                    color: props.isDisabled ? 'gray' : 'black',
                    pointerEvents: props.isDisabled ? 'none' : 'auto',
                }}
            >
                {props.data.label}
            </div>
        </components.Option>
    );
};


const CustomSelect = () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2', isDisabled: true },
        { value: 'option3', label: 'Option 3' },
    ];

    return (
        <Select
            options={options}
            components={{ Option: CustomOption }}
            isOptionDisabled={(option) => option.isDisabled}
            isDisabled={false}
        />
    );
};

export default CustomSelect;
