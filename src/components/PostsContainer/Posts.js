import React, {useEffect, useState} from 'react';

import {commentService} from "../../services/commentService";
import {Post} from "./Post";

const Posts = ({postId}) => {
    let [posts,setPosts] = useState([])

    useEffect(()=>{
        commentService.byPostId(postId).then(({data})=>setPosts(data))
    }, [postId])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};