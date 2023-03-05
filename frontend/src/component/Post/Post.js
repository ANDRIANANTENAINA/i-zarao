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
        <div className="flex flex-row justify-center w-full px-5 py-2">
            <div className="w-1/2 br p-5 border-l border-l-1 border-gray-400">
                {data.map(post => (
                    <div key={post.id}>
                        <h1 className="border-b border-b-2 border-gray-400 text-lg">{post.title}</h1>
                        <p className="p-2 text-justify text-sm">{post.content}</p>
                        <ul className="flex flex-row space-x-2 wrapper">
                            {post.tags.map(tag => (
                                <li key={tag.id} className="mt-3 bg-amber-400 px-1 rounded hover:bg-amber-600 text-sm">{tag.tag}</li>
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
        </div>
    )
}

export default Post;