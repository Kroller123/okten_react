import {apiService} from "./apiService";
import {urls} from "../constants/urls";

let commentService = {
    getAll:()=> apiService.get(urls.comments.base),
    byPostId:(postId) => apiService.get(urls.comments.byPostId(postId))
}

export {commentService}