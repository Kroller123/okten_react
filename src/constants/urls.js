let baseURL = 'https://jsonplaceholder.typicode.com'

let users = '/users'
let posts = '/posts'
let comments = '/comments'

let urls = {
    users:{
        base:users,
        byId:(id)=>`${users}/${id}`
    },
    posts:{
        base:posts,
        byId:(id)=>`${posts}/${id}`
    },
    comments:{
        base:comments
    }
}

export {baseURL,urls}