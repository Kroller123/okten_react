import React from 'react';

const Todo = ({todo}) => {
    let {userId,id,title,completed} = todo
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>completed:{completed}</div>
            <hr/>
        </div>
    );
};

export {Todo};