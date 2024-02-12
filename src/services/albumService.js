import {apiService} from "./apiService";
import {urls} from "../constants/urls";

let albumService = {
    getAll:()=> apiService.get(urls.albums)
}

export {albumService}