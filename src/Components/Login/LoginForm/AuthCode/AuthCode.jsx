import React from "react"
import { Controller, useWatch } from "react-hook-form"
import NumberFormat from "react-number-format"
import s from "./AuthCode.module.css"
import { AutoTabProvider } from 'react-auto-tab'
import { event } from "jquery"


const AuthCode = (props) => {

    const control = props.control
    const watchAuthCode = useWatch({
        control,
        defaultValue: ''
    })
    const styleArr = {
        width: "20px",
        height: "20px",
        textAlign: "center"
    }

    console.log(watchAuthCode)
    debugger;
    return (

        <div className={s.wrapper}>
            <span>Code </span>
            <AutoTabProvider>
                <input type="text" ref={props.register({
                    required:true,
                    pattern: [0-9]
                })} maxLength={1} inputMode="numeric" style={styleArr}/>
                <input type="text"  ref={props.register({
                    required:true,
                    pattern: [0-9]})} 
                    maxLength={1} inputMode="numeric" style={styleArr}/>
                <input type="text" ref={props.register({
                    required:true,
                    pattern: [0-9]})}
                    maxLength={1} inputMode="numeric" style={styleArr}/>
                <input type="text"  ref={props.register({
                    required:true,
                    pattern: [0-9]})}
                    maxLength={1} inputMode="numeric" style={styleArr}/>
            </AutoTabProvider>

        </div>
    )
}


export default AuthCode