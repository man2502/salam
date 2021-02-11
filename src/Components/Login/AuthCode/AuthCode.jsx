import React from "react"
import { Controller, useForm, useWatch } from "react-hook-form"
import NumberFormat from "react-number-format"
import s from "./AuthCode.module.css"
import { AutoTabProvider } from 'react-auto-tab'
import $ from "jquery"

const AuthCode = (props) => {


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
        console.log(data);

    }
    
    // function calcLength(val){
    //     let s = 0
    //     if(val == 1) s = s+ 1
        
    //     if(s==4 ) alert("yes")
    // }
   
    const postCode = (value) => {
        
        let  s = s + value
        if (s.length==4) alert("yes")     
    }

    const blocks = Array.from({ length: 4 }, (element, index) => (
        <input
            className="block"
            tabIndex={index}
            key={index}
            maxLength={1}
            onKeyUp={autoTab}
            style={styleArr}
            ref={register}
            name={index.toString()}
            onChange={(e) => { postCode(e.target.value.toString(), control) }}
        />
    ));

    return (

        <div className={s.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span>Code </span>
                {blocks}
                <button >submit</button>
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