import React, { useState } from "react"
import { Row, Col, FormLabel, FormGroup, Form } from "react-bootstrap"
import s from "./Login.module.css"
import {  useForm, useWatch } from "react-hook-form"
import LoginForm from "./LoginForm/LoginForm"
import { connect } from "react-redux"
import {postUserInfo} from "./../../redux/login-reducer"
import { NavLink, Redirect } from "react-router-dom"



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
        console.log(data);
        props.postUserInfo()
    }

    const isSuccesPost = ()=>{
        return  props.isSuccesPost   
    }

    return (
        <div className={s.wrapper}>
            <h1>Welcome to Salam</h1>
            <LoginForm  succesPost={isSuccesPost} 
                        control={control} 
                        register={register}
                        onSubmit={handleSubmit(onSubmit)}/>
            
        </div>
    )
}

const mapStatetoProps = (state)=>{
    return{
       isSuccesPost : state.login.isCodeCame 
    }
}

export default connect(mapStatetoProps,{
    postUserInfo
}) (Login)




