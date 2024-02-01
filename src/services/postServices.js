import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

let postServices = {
    getAll:() => axiosServices.get(urls.posts.base),
    getById:(id) => axiosServices.get(urls.posts.byPostId(id))
}

export {postServices}