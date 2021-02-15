import React, { useState } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"
import NumberFormat from "react-number-format"
import s from "./AuthCode.module.css"
import { AutoTabProvider } from 'react-auto-tab'
import $ from "jquery"
import { Redirect } from "react-router-dom"
import Profile from "./../../Profile/Profile"

const AuthCode = (props) => {
    const [totalCode , setTotalCode] =useState("")
    const styleArr = {
        width: "20px",
        height: "20px",
        textAlign: "center"
    }

    const { handleSubmit,
        register,
        watch,
        errors,
        control,
        formState: {
            touched
        } } = useForm();


    const onSubmit = (data) => {
        props.post(props.phone,props.code,totalCode)
    }
    
   
   
    const postCode = (value) => {
        setTotalCode(totalCode+value)  
    }

    const blocks = Array.from({ length: 5 }, (element, index) => (
        <input
            className="block"
            tabIndex={index}
            key={index}
            maxLength={1}
            onKeyUp={autoTab}
            style={styleArr}
            ref={register}
            name={index.toString()}
            onChange={(e) => { postCode(e.target.value.toString()) }}
        />
    ));

    return (

        <div className={s.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span>Code </span>
                {blocks}
                {/* {totalCode.length ==4 }  */}
                {/* <Redirect to="/profile"/> */}
                {totalCode.length == 5 ?onSubmit(): undefined}
            </form>

        </div>
    )
}

const autoTab = e => {
    const BACKSPACE_KEY = 8;
    const DELETE_KEY = 46;
    let tabindex = $(e.target).attr("tabindex") || 0;
    tabindex = Number(tabindex);
    if (e.keyCode === BACKSPACE_KEY) {
        tabindex -= 1;
    } else if (e.keyCode !== DELETE_KEY) {
        tabindex += 1;
    }
    const elem = $("[tabindex=" + tabindex + "]");
    if (elem[0]) {
        elem.focus();
    }
};

export default AuthCode