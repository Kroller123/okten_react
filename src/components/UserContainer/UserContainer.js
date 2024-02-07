import React, {useEffect, useState} from 'react';

import {UserForm} from "./UserForm";
import {Users} from "./Users";
import {usersServices} from "../../services/usersServices";

const UserContainer = () => {

    let [users,setUsers] = useState([])

    useEffect(()=>{
        usersServices.getAll().then(({data})=> setUsers(data))
    }, [])
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UserContainer};