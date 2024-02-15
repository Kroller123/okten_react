import React from 'react';
import {useParams} from "react-router-dom";
import {Posts} from "../components/PostsContainer/Posts";

const PostsPage = () => {
    let {id} = useParams();
    console.log(id)
    return (
        <div>
            <Posts userId={id}/>
        </div>
    );
};

export {PostsPage};