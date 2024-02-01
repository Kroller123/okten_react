import React from 'react';

import css from './Post.module.css'

const Post = ({post, click}) => {
    let {id,title} = post
    return (
        <div className={css.post}>
            <div><b>id</b>:{id}</div>
            <div><b>Title</b>:{title}</div>
            <button onClick={() => click(id)}>Post Details</button>
        </div>
    );
};

export {Post};