import React from "react"
import { Controller,useWatch } from "react-hook-form"
import NumberFormat from "react-number-format"
import CodesForm from "./CodesForm/CodesForm"
import s from "./LoginForm.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.onSubmit} className="form">
            <section className={s.phone}>
                <CodesForm control={props.control} />
                <Controller
                    name="phone"
                    control={props.control}
                    rules={{
                        required: true,
                    }}
                    defaultValue={""}
                    as={<NumberFormat maxLength={CalcLength(props.control)} placeholder="your phone" />}

                />
                <IsolateReRender control={props.control} onSubmit={props.onSubmit} />

            </section>

           

        </form>
    )
}

function IsolateReRender({ control, onSubmit }) {
    const watchCode = GetCodeLength(control)
    const watchPhone = useWatch({
        control,
        name: "phone",
        defaultValue: ""
    })

   
    if (watchPhone.length + watchCode.length == 12&& watchCode.length >0) return <button onSubmit={onSubmit}>Post</button>
    else return <button disabled>Post</button>

    
}
function GetCodeLength (control){
    const watchCode = useWatch({
        control,
        name: "country",
        defaultValue: '+993'
    });

    return watchCode
}

function CalcLength (control){
    let len = GetCodeLength(control).length
    let length = 12-len
    return length? length : 12
}

export default LoginForm