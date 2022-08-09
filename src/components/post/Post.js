import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./post.module.css"

function Post(props) {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={classes.info} to="">Post Page</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Post;