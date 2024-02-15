import {apiService} from "./apiService";
import {urls} from "../constants/urls";

let commentService = {
    getByPostId:(postId)=>apiService.get(urls.comments.base, {params: {postId}})
}

export {commentService}