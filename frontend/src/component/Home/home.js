import React, {useEffect, useState} from "react";
import './home.css'
import axios from 'axios';
import {Link} from "react-router-dom";
const Home = (results) =>{

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/posts')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log("data",data);
    return(

        <div className="flex flex-row justify-between space-x-3 px-10 py-5 overflow-hidden">

            <div className="content shadow-xl border-t rounded-xl w-1/6 p-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi fugiat laboriosam, natus nemo perferendis sapiente sed sequi tempore velit! Architecto aspernatur at atque commodi iure molestiae nam natus repellat.</p>
            </div>

                <div className="content shadow-xl border-t rounded-xl w-2/3 px-5">
                    {results.results.length > 0 ? (
                     results.results.map(item => (
                        <div className="card border-b-2 relative py-2">
                            <p className="text-gray-500 hover:text-gray-700 pl-2 taille">0 votes</p>
                            <Link to={`/Post/${item.id}/${item.title}`}  key={item.id} className="text-indigo-800 text-left hover:text-indigo-900 taille_title "> {item.title}</Link>
                            <p className="text-gray-500 hover:text-gray-700 pl-2 taille">{item.responses.length} answers</p>
                            <div className="flex flex-row space-x-5 text-xs  ">
                                {item.tags.map(item2 => (
                                    <p key={item2.id} className="bg-amber-400 px-2 rounded hover:bg-amber-600 ">{item2.tag}</p>
                                ))}
                            </div>
                            <p className="text-gray-500 hover:text-gray-700 pl-2 taille">0 views</p>
                            <div className="flex flex-row space-x-5 ">
                                <p className="text-xs">{item.author}</p>
                                <p className="text-xs">{item.created_at}</p>
                            </div>
                            {item.status === '1' ? (
                                <div>
                                    <div className="success absolute right-2 top-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><mask id="ipSSuccess0"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012L24 4Z"/><path stroke="#000" d="m17 24l5 5l10-10"/></g></mask><path fill="#708d23" d="M0 0h48v48H0z" mask="url(#ipSSuccess0)"/></svg>
                                    </div>
                                    <div className="absolute right-2 bottom-2">
                                        <Link to={`/Post/${item.id}/${item.title}`}  key={item.id}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="M38.368 5.942H6.553A2.053 2.053 0 0 0 4.5 7.994v20.527a2.053 2.053 0 0 0 2.053 2.052h6.157v7.378a1.026 1.026 0 0 0 1.753.726l8.103-8.104h15.802a2.053 2.053 0 0 0 2.053-2.052V7.994a2.053 2.053 0 0 0-2.053-2.052Z"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="M12.71 33.652H9.633A2.053 2.053 0 0 1 7.579 31.6v-1.027M40.421 9.02h1.026a2.053 2.053 0 0 1 2.053 2.053V31.6a2.053 2.053 0 0 1-2.053 2.053H35.29v7.377a1.026 1.026 0 0 1-1.752.726l-8.104-8.104h-5.947m-9.342-22.461h24.631M10.145 17.94h19.158m-19.158 6.749h13.684"/></svg></Link>

                                    </div>
                                </div>
                                ) : (
                                    <div className="absolute"></div>
                            )}



                        </div>
                    ))) : (
                        <div className="flex flex-row justify-center">
                            <p className="text-gray-500 hover:text-gray-700 pl-2 taille">Aucune Résultat !</p>
                        </div>
                    )}
                </div>

            <div className="contentshadow-xl border-t rounded-xl w-1/6 p-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta distinctio dolore perspiciatis. Asperiores assumenda autem delectus dolorum ducimus earum eligendi fugit harum minus molestiae nostrum odit omnis, quibusdam veniam.</p>
            </div>

        </div>
    )
}

export default Home;