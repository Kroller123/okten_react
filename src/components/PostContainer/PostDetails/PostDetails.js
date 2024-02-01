import React from 'react';

const PostDetails = ({postsDetails}) => {
    let {data} = postsDetails
    let {userId,id,title,body} = data

    return (
        <div>
            <div><b>userId</b>:{userId}</div>
            <div><b>id</b>:{id}</div>
            <div><b>title</b>:{title}</div>
            <div><b>body</b>:{body}</div>
        </div>
    );
};

export {PostDetails};