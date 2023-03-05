import React, {useEffect, useState} from "react";
import axios from 'axios';
import userPict from '../../image/img_user.jpg'
import { useParams } from "react-router-dom";
const  Post = () =>{

    const [data, setData] = useState([]);
    const [vote, setVote] = useState([]);
    const id = useParams();

    const postId = id.id;

    const toogleHeart = () => {
        var heart = document.getElementById("heart");

        if (heart.getAttribute("fill") === "#b4151c") {
            console.log(heart.getAttribute("fill"))
            heart.setAttribute("fill", "#FFFFFF"); // fond blanc
            heart.setAttribute("stroke", "#b4151c"); // contour rouge
        } else {
            console.log(heart.getAttribute("fill"))
            heart.setAttribute("fill", "#b4151c"); // fond rouge
            heart.removeAttribute("stroke"); // pas de contour
        }
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/${postId}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get(`http://localhost:8000/api/post/${postId}`)
            .then(response => {
                setVote(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return(
        <div className="flex flex-row justify-center w-full px-5 py-2">
            {data.map(post => (
                <div key={post.id} className="w-1/2">
                    <div className="relative p-5 border-l border-l-1 border-gray-400">
                        <h1 className="border-b border-b-2 border-gray-400 text-lg">{post.title}</h1>
                        <p className="p-2 text-justify text-sm">{post.content}</p>
                        <ul className="flex flex-row space-x-2 wrapper">
                            {post.tags.map(tag => (
                                <li key={tag.id} className="mt-3 bg-gray-200 rounded-full px-2 text-xs font-semibold text-gray-700 mx-1">{tag.tag}</li>
                            ))}
                        </ul>
                        <div className="mt-5 absolute bottom-0 right-2">
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
                        <ul className="mt-10">
                            <p className="text-lg text-gray-600">{post.responses.length} Réponses</p>
                            {post.responses.map(response => (
                                <li key={response.id} className="relative flex flex-col">
                                    <div className="relative p-5 border-r border-r-1 border-gray-400">
                                        <div className="absolute left-0 top-1/6 flex flex-col space-y-0 items-center justify-center">
                                            <h2 className="text-gray-500 text-xl">56</h2>
                                            <svg className="cursor-pointer" width="30px" height="30px" viewBox="0 0 24 24" onClick={() => toogleHeart()}>
                                                <path id="heart"
                                                      fill="#ffffff"
                                                      stroke="#b4151c"
                                                      strokeWidth="2"
                                                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="p-2 text-justify text-sm ml-2">{response.content}Despite these challenges, there are efforts underway to protect Madagascar's environment. For example, the government has established protected areas such as national parks and reserves to conserve the island's biodiversity. These areas not only protect endangered species but also provide opportunities for ecotourism, which can provide economic benefits for local communities.</p>
                                    </div>
                                    <div className="absolute bottom-0 right-2">
                                        <div className="w-full mx-auto text-gray-500">
                                            <div className="flex flex-row space-x-1 items-center">
                                                <img className="w-10 h-10 rounded object-cover z-10 shadow-2xl"
                                                     src={userPict}/>
                                                <p className="text-xs">ANDRIANTSOA <br/>Valiavo Haja Ny Aina</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            <div className="flex flex-col mt-12">
                <textarea className="send_ms mx-5 rounded p-2 border-2 border-gray-200 "
                          placeholder="vos question ?"></textarea>
                <div className="btn_ms mx-5 mt-5 space-x-2">
                    <input type="file" id="file" className="input_file"/>
                    <label htmlFor="file" className="green rounded px-4"> Ajouter un fichier</label>
                    <button className="green px-4  rounded">Envoyer</button>
                </div>
            </div>
        </div>
    )
}

export default Post;