import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./Pages/UsersPage";
import {UserDetailsPage} from "./Pages/UserDetailsPage";
import {PostsPage} from "./Pages/PostsPage";
import {PostDetailsPage} from "./Pages/PostDetailsPage";

let router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [{
            index: true, element: <Navigate to={'users'}/>
        },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'users/:id', element: <UserDetailsPage/>, children: [
                    {path: 'posts', element: <PostsPage/>}
                ]
            },
            {
                path: 'posts/:id', element: <PostDetailsPage/>
            }
        ]
    }
])

export {router}