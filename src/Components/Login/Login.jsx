import React, { useState } from "react"
import { Row, Col, FormLabel, FormGroup, Form } from "react-bootstrap"
import s from "./Login.module.css"
import {  useForm, useWatch } from "react-hook-form"
import LoginForm from "../LoginForm/LoginForm"
import { connect } from "react-redux"




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
        console.log(data)
    }

    const succesPost = ()=>{
        return  props.succesPost   
    } 
    return (
        <div className={s.wrapper}>
            <h1>Welcome to Salam</h1>
            <LoginForm  succesPost={succesPost} 
                        control={control} 
                        onSubmit={handleSubmit(onSubmit)}/>
        </div>
    )
}

const mapStatetoProps = (state)=>{
    return{
       succesPost : state.login.isCodeCame 
    }
}

export default connect(mapStatetoProps,{

}) (Login)




