import React, {useState} from "react";
import {useForm} from "react-hook-form";

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
}
function ToDoList() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: any) => {
    }
    console.log(watch());
    return (
        <div>
            <form
                style={{display: "flex", flexDirection: "column"}}
                onSubmit={handleSubmit(onValid)}>
                <input {...register("email", {
                    required: true,
                    minLength: 10,
                    pattern: {
                        value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                        message: "Only naver.com emails allowed",
                    },
                })} placeholder="Email"/>
                <span>{errors?.email?.message}</span>
                <input {...register("firstName", {required: true})} placeholder="First Name"/>
                <input {...register("lastName", {required: true})} placeholder="Last Name"/>
                <input {...register("username", {required: true, minLength: 10})} placeholder="Username"/>
                <input {...register("password", {required: true, minLength: 5})} placeholder="Password"/>
                <input {...register("password1", {required: true, minLength: 5})} placeholder="Password1"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;