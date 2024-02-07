import React, {useEffect, useState} from 'react';

import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";
import {commentsServices} from "../../services/commentsServices";

const CommentsContainer = () => {
    let [comments,setComments] = useState([])

    useEffect(()=>{
        commentsServices.getAll().then(({data})=> setComments(data))
    }, [])
    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};