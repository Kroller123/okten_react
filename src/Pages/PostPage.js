import React from 'react';
import {useLocation} from "react-router-dom";

import {Posts} from "../components/PostsContainer/Posts";

const PostPage = () => {
    let {state:postId} = useLocation();
    return (
        <div>
            <Posts postId={postId}/>
        </div>
    );
};

export {PostPage};