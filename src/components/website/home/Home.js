import React from 'react'
import Button from "../../ui/button/button";
import Checkbox from "../../ui/checkbox/checkbox";
import Trash from "../../../assets/icons/trash-2.png"
import Calendar from "../../../assets/icons/CalendarDots.svg"
import Textarea from "../../ui/textarea/textarea";
import Input from "../../ui/inputs/input";
import cls from "../../ui/inputs/input.module.sass"

export const Home = () => {

    return (
        <>

            {/*    <Checkbox>*/}
            {/*        label*/}
            {/*        <input type="checkbox"/>*/}

            {/*    </Checkbox>*/}

            {/*<Button>*/}
            {/*    button*/}
            {/*</Button>*/}

            {/*<Textarea>*/}
            {/*    <span>label</span>*/}
            {/*    <textarea placeholder="tuldiring" name="" id="" cols="" rows=""></textarea>*/}
            {/*    <label htmlFor="">label</label>*/}
            {/*</Textarea>*/}
            <Input>
                <label htmlFor="">Input Label</label>
                <div className={cls.input_main}>
                    <input type="text"/>
                    <img src={Calendar} alt=""/>
                </div>
                <span>helper text</span>
            </Input>
        </>
    );
};

