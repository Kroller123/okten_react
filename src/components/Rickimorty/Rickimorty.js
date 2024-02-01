import React from 'react';

const Rickimorty = ({morty}) => {
    let {id,name,status,species,gender,image} = morty
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>status:{status}</div>
            <div>species:{species}</div>
            <div>gender:{gender}</div>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Rickimorty};