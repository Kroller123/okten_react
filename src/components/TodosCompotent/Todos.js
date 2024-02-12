import React, {useEffect, useState} from 'react';

import {todoService} from "../../services/todoService";
import {Todo} from "./Todo";

const Todos = () => {
    let [todos,setTodos] = useState([])

    useEffect(()=>{
        todoService.getAll().then(({data})=>setTodos(data))
    }, [])
    return (
        <div>
            {todos.map(todo => <Todo ket={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};