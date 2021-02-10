import React from "react"
import NumberFormat from "react-number-format"
import s from "./AuthCode.module.css"

const AuthCode = (props) =>{
    return(
        <div className={s.wrapper}>

           <span>Code</span> <NumberFormat name="authCode" format={'[ # ]'+ '[ # ] [ # ] [ # ]'} placeholder={"[   ] [   ] [   ] [   ]"} style={{border:"none", outline:"none"}}/>
        </div>
    )
}


export default AuthCode