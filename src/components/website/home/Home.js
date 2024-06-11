import React from 'react'
import Icon from "../../../assets/icons/PencilSimpleLine.png"

import cls from "./Home.module.sass"
import Button from "../../ui/button/button";


export const Home = () => {

    return (
        <div className={cls.Home}>
        <Button>
            {/*button*/}
            <img src={Icon} alt=""/>
        </Button>

        </div>
    );
};

