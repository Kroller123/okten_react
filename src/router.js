import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {AlbumPage} from "./Pages/AlbumPage";
import {TodoPage} from "./Pages/TodoPage";
import {CommentPage} from "./Pages/CommentPage";
import {PostPage} from "./Pages/PostPage";

let router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'albums', element:<AlbumPage/>},
            {path:'todos', element:<TodoPage/>},
            {path:'comments', element:<CommentPage/>, children:[
                    {path:'posts', element:<PostPage/>}
                ]}
        ]}
]);


export {router}