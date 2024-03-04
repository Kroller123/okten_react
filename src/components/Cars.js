import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "./Car";
import {carService} from "../services";
import {carActions} from "../store";

const Cars = () => {
    let {cars, trigger} = useSelector(store=>store.cars);
    let dispatch = useDispatch();


    useEffect(()=>{
        carService.getAll().then(({data})=>dispatch(carActions.setResponse(data)))
    }, [trigger, dispatch])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};