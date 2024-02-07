import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

let launchServices = {
    gelAll:()=>axiosServices.get(urls.launch)
}

export {launchServices}