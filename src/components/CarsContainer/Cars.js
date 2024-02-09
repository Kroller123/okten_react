import React from 'react';

import {Car} from "./Car";

const Cars = ({cars,setCarForUpdate,setTrigger}) => {
    return (
        <div>
            {cars.map(car=><Car setTrigger={setTrigger} key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};