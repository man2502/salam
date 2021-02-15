import React, { useState } from "react"
import { Row, Col, FormLabel, FormGroup, Form } from "react-bootstrap"
import s from "./Login.module.css"
import { useForm, useWatch } from "react-hook-form"
import LoginForm from "./LoginForm/LoginForm"
import { connect } from "react-redux"
import { postCodeThunk,postNumberThunk } from "./../../redux/login-reducer"

import AuthCode from "./AuthCode/AuthCode"




const Login = (props) => {
    const { handleSubmit,
        register,
        watch,
        errors,
        control,
        formState: {
            touched
        } } = useForm();


    const onSubmit = (data) => {
        
        props.postNumberThunk(data.phone, data.country_code)
        // props.postUserInfo()

    }

    const isSuccesPost = () => {
        return props.isSuccesPost
    }

    return (
        <div className={s.wrapper}>
            <h1>Welcome to Salam</h1>
            <LoginForm 
                control={control}
                register={register}
                onSubmit={handleSubmit(onSubmit)} />
            <section>
                {isSuccesPost() ? <AuthCode phone={props.phone} code={props.code} post={props.postCodeThunk}/> : undefined}

            </section>
            <button onClick={()=>{
                
            }}>test</button>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        isSuccesPost: state.login.isCodeCame,
        phone:state.login.phone,
        code:state.login.country_code
    }
}

export default connect(mapStatetoProps, {
    postNumberThunk,
    postCodeThunk
})(Login)




