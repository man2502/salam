import React, { useState } from "react"
import { Row, Col, FormLabel, FormGroup, Form } from "react-bootstrap"
import s from "./Login.module.css"
import { Controller, useForm, useWatch } from "react-hook-form"
import CodesForm from "./CodesForm"
import NumberFormat from "react-number-format"
import AuthCode from "./AuthCode/AuthCode"




const Login = () => {
    const { handleSubmit,
        register,
        watch,
        errors,
        control,
        formState: {
            touched
        } } = useForm();



    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={s.wrapper}>
            <h1>Welcome to Salam</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <section className={s.phone}>
                    <CodesForm control={control} />
                    <Controller
                        name="phone"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        defaultValue={""}
                        as={<NumberFormat maxLength={CalcLength(control)} placeholder="your phone" />}

                    />
                    <IsolateReRender control={control} onSubmit={handleSubmit(onsubmit)}/>
                   
                </section>

                <section>
                    <AuthCode />
                </section>
                
            </form>
        </div>
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

export default Login




