import React from 'react';

import {useForm} from "react-hook-form";
import {commentsServices} from "../../services/commentsServices";

const CommentForm = ({setComments}) => {
    let {handleSubmit,register} = useForm();

    let click = async (comment) => {
        let {data} = await commentsServices.create(comment);
        setComments(prev=>[...prev, data])
    }

    return (
        <form onSubmit={handleSubmit(click)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>click</button>
        </form>
    );
};

export {CommentForm};