import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

let commentsServices = {
    getAll:()=> axiosServices.get(urls.comments),
    create:(comment) => axiosServices.post(urls.comments, comment)
}

export {commentsServices}