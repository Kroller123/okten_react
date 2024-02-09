import React, {useEffect, useState} from 'react';

import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../../services/carService";

const CarsContainer = () => {
    let [cars,setCar] = useState([])
    let [trigger,setTrigger] = useState()
    let [carForUpdate,setCarForUpdate] = useState(null)


    useEffect(()=>{
        carService.getAll().then(({data})=> setCar(data))
    }, [trigger])
    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars setTrigger={setTrigger} cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};