let baseURL = 'https://jsonplaceholder.typicode.com'

let todos = '/todos'
let albums = '/albums'
let comments = '/comments'

let urls = {
    todos,
    albums,
    comments:{
        base:comments,
        byPostId:(postId)=>`/posts/${postId}${comments}`
    }
}

export {
    baseURL,urls
}
