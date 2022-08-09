import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Post from "../../components/post/Post";

function PostPage(props) {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])


    return (
        <div>
            <Post/>
            <ul>
                {posts.slice(0, 10).map(post => <li key={post.title}>{post.id}<Link to={`${post.id}`}>info</Link></li>)}
            </ul>
        </div>
    );
}

export default PostPage;