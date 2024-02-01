import React from 'react';

const Simpson = ({simpson}) => {
    let {name,age,surname,info,photo} = simpson
    return (
        <div>
            <div>name:{name}</div>
            <div>age:{age}</div>
            <div>surname:{surname}</div>
            <div>info:{info}</div>
            <img src={photo} alt={name}/>
            <hr/>
        </div>
    );
};

export {Simpson};