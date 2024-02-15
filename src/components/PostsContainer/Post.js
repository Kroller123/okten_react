import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    let {id,title} = post
    let navigate = useNavigate();
    return (
        <div>
            <div>title:{title}</div>
            <button onClick={()=>navigate(`/posts/${id}`)}>get post Details</button>
        </div>
    );
};

export {Post};