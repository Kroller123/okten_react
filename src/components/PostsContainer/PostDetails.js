import React from 'react';
import {Comments} from "../CommentsContainer/Comments";

const PostDetails = ({postDetails}) => {
    let {id,userId,title,body} = postDetails
    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <hr/>
            <Comments postId={id}/>
        </div>
    );
};

export {PostDetails};