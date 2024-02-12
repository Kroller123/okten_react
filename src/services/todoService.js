import {apiService} from "./apiService";
import {urls} from "../constants/urls";

let todoService = {
    getAll:()=>apiService.get(urls.todos)
}

export {todoService}