import React from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../components/CommentsCompotent/Comments";

const CommentPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Comments/>
        </div>
    );
};

export {CommentPage};