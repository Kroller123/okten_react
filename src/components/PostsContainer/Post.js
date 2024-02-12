import React from 'react';

const Post = ({post}) => {
    let {id,name,body,email} = post
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>body:{body}</div>
            <div>email:{email}</div>
            <hr/>
        </div>
    );
};

export {Post};