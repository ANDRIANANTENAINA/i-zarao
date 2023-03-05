import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
const  Post = () =>{

    const [data, setData] = useState([]);
    const id = useParams();

    const postId = id.id;


    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/${postId}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return(
        <div>
            {data.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <ul>
                        {post.tags.map(tag => (
                            <li key={tag.id}>{tag.tag}</li>
                        ))}
                    </ul>
                    <ul>
                        {post.responses.map(response => (
                            <li key={response.id}>{response.content}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Post;