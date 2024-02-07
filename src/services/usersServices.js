import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

let usersServices = {
    getAll:()=> axiosServices.get(urls.users),
    create:(user) => axiosServices.post(urls.users, user)
}


export {usersServices}