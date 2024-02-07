import React from 'react';

import {useForm} from "react-hook-form";
import {usersServices} from "../../services/usersServices";

const UserForm = ({setUsers}) => {
    let {handleSubmit,register} = useForm();

    let click = async (user) => {
        let {data} = await usersServices.create(user);
        setUsers(prev =>[...prev,data])
    }
    return (
        <form onSubmit={handleSubmit(click)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>Click</button>
        </form>

    );
};

export {UserForm};