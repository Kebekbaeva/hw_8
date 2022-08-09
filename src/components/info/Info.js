import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";


function Info(props) {
    const params = useParams()
    const [posts, setPosts] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    const goBack = () => {
        navigate(-1)
    }


    return (
        <div>
            <button onClick={goBack}>back</button>
            <h1>{posts.title}</h1>
            <div>{posts.body}</div>
        </div>
    );
}

export default Info;