import React, {useEffect, useState} from 'react'


import cls from "./Home.module.sass"
import {useDispatch, useSelector} from "react-redux";
import {decremented, incremented} from "slices/websiteSlice";

export const Home = () => {

    const [value,setValue] = useState(0)
    const [error,setError] = useState(false)

    // const {value} = useSelector(state => state.counter)

    // const dispatch = useDispatch()
    // const inc = () => {
    //     dispatch(incremented({number: 1}))
    // }
    //
    // const dec = () => {
    //     dispatch(decremented({number: 1}))
    //
    // }

    useEffect(() => {
        if (value === 5) {
            setError(true)
        } else {
            setError(false)
        }
    },[value])

    const inc = () => {
        setValue(state => state+1)
    }

    const dec = () => {
        setValue(state => state-1)
    }


    return (
        <div className={cls.Home}>

            <h1>{value}</h1>

            {error && <h1 style={{color:"red"}}>Sarik</h1>}

            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>

        </div>
    );
};

