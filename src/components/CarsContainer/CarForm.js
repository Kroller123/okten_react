import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";

const CarForm = ({setTrigger,carForUpdate}) => {
    let {reset,handleSubmit, register,formState:{isValid,errors}, setValue} = useForm({mode:'all'});

    useEffect(()=>{
        if(carForUpdate) {
            setValue('brand',carForUpdate.brand, {shouldValidate:true})
            setValue('price',carForUpdate.price, {shouldValidate:true})
            setValue('year',carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate,setValue])

    let save = async (car) => {
        await carService.create(car)
        setTrigger(prev => !prev)
        reset()
    }

    let update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev => !prev)
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(carForUpdate? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern:{value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message:'min 3, max 20'}
                })}/>
                <input type="text" placeholder={'price'} {...register('price',{
                    min:{value:0,message:'please write normal price'},
                    max:{value:999_999, message:'no more than a million'},
                    valueAsNumber:true
                })}/>
                <input type="text" placeholder={'year'} {...register('year',{
                    min:{value:1990,message:'please write normal year'},
                    max:{value:new Date().getFullYear(),message:'there is no such year'},
                    valueAsNumber:true
                })}/>
                <button disabled={!isValid}>{carForUpdate? 'Update':'Save'}</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};