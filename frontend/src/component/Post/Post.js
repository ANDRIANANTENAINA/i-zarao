import React, {useEffect, useState} from "react";
import axios from 'axios';
import userPict from '../../image/img_user.jpg'
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
                {data.map(post => (
                    <div key={post.id} className="w-1/2 br p-5 border-l border-l-1 border-gray-400">
                        <div className="relative">
                            <h1 className="border-b border-b-2 border-gray-400 text-lg">{post.title}</h1>
                            <p className="p-2 text-justify text-sm">{post.content}</p>
                            <ul className="flex flex-row space-x-2 wrapper">
                                {post.tags.map(tag => (
                                    <li key={tag.id} className="mt-3 bg-gray-200 rounded-full px-2 text-xs font-semibold text-gray-700 mr-2 mb-2">{tag.tag}</li>
                                ))}
                            </ul>
                            <div className="mt-5 absolute bottom-0 right-0">
                                <div className="w-full mx-auto text-gray-500">
                                    <div className="flex flex-row space-x-1 items-center">
                                        <img className="w-10 h-10 rounded object-cover z-10 shadow-2xl"
                                             src={userPict}/>
                                        <p className="text-xs">ANDRIANTSOA <br/>Valiavo Haja Ny Aina</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className="">
                                {post.responses.map(response => (
                                    <li key={response.id}>{response.content}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Post;