import React, {useState} from 'react'
import Icon from "../../../assets/icons/PencilSimpleLine.png"
import cls from "./Home.module.sass"
import Button from "../../ui/button/button";
import Select from "../../ui/select/select";
import Radio from "../../ui/radio/radio";
import Modal from "../../ui/modals/modal";
import CustomSelect from "../../ui/custom/custom";

export const Home = () => {
    //  this comment is shaha's please delete

    const [selected, setSelected] = useState('');

    const handleChange = (event) => {
        setSelected(event.target.id);
    };

    return (
        <div className={cls.Home}>
            <Button>
                button
                <img src={Icon} alt=""/>
            </Button>

            <Select>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </Select>
                <Radio
                    label="Option 1"
                    name="group1"
                    checked={selected === 'Option 1'}
                    onChange={handleChange}
                />
                <Radio
                    label="Option 2"
                    name="group1"
                    checked={selected === 'Option 2'}
                    onChange={handleChange}
                />
                <Radio
                    label="Disabled"
                    name="group1"
                    checked={false}
                    onChange={handleChange}
                    disabled
                />
            <Modal/>
            <CustomSelect />

        </div>
    );
};

