import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import {Post} from "./Post";

const Posts = ({userId}) => {
    let [posts,setPosts] = useState([])

    useEffect(()=>{
        postService.getByUserId(userId).then(({data})=>setPosts(data))
    }, [userId])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};