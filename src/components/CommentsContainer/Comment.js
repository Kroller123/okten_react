import React from 'react';

const Comment = ({comment}) => {
    let {id,name,email,body} = comment
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <hr/>
        </div>

    );
};

export {Comment};