import React, {useEffect, useState} from 'react';
import {launchServices} from "../../services/launchServices";
import {Launch} from "../Launch/Launch";

const Launchs = () => {
    let [launchs, setLaunchs] = useState([])


    useEffect(()=>{
        launchServices.gelAll().then(({data}) =>{
          let filtered = data.filter(launch => launch.launch_year !== '2020')
          setLaunchs(filtered)
        })
    }, [])
    return (
        <div>
            {launchs.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {Launchs};