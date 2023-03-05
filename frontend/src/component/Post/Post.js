import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
const Post = () =>{

    const [data, setData] = useState({});
    const id = useParams();

    const postId = id.id;

    console.log(postId)

    useEffect(() => {
        axios.get('http://localhost:8000/api/post/${postId}')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(data)

    return(
        <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </div>
    )
}

export default Post;