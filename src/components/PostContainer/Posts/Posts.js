import React, {useEffect, useState} from 'react';

import {postServices} from "../../../services/postServices";
import {Post} from "../Post/Post";
import css from './Posts.module.css'
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    let [posts, setPosts] = useState([])
    let [postsDetails, setPostsDetails] = useState(null)


    let click = async (id) => {
        let data = await postServices.getById(id).then();
        setPostsDetails(data)
    }

    useEffect(() => {
        postServices.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            {
                postsDetails ? <PostDetails postsDetails={postsDetails} /> : <h1>NOT HAVE</h1>
            }
            <hr/>
            <div className={css.posts}>
                {posts.map(post => <Post key={post.id} post={post} click={click}/>)}
            </div>
        </div>
    );
};

export {Posts};