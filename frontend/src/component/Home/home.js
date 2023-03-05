import React, {useEffect, useState} from "react";
import './home.css'
import axios from 'axios';
const Home = () =>{

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

    return(
        <div className="flex flex-row justify-between space-x-3 p-10">

            <div className="shadow-xl border-t rounded-xl w-1/6 h-screen pt-1 pl-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi fugiat laboriosam, natus nemo perferendis sapiente sed sequi tempore velit! Architecto aspernatur at atque commodi iure molestiae nam natus repellat.</p>
            </div>

                <div className="shadow-xl border-t rounded-xl w-2/3 h-screen pt-1 pl-1">
                    {data.map(item => (
                        <div className="card border-b-2">
                            <p className="text-gray-500 hover:text-gray-700 pl-2 taille">0 votes</p>
                            <p className="text-indigo-800 hover:text-indigo-900 taille_title "> {item.title} </p>
                            <p className="text-gray-500 hover:text-gray-700 pl-2 taille">0 answers</p>
                            <div className="flex flex-row space-x-5 text-xs  ">
                                {item.tags.map(item2 => (
                                    <p className="bg-amber-400 px-2 rounded hover:bg-amber-600 ">{item2.tag}</p>
                                ))}
                            </div>
                            <p className="text-gray-500 hover:text-gray-700 pl-2 taille">0 views</p>
                            <div className="flex flex-row space-x-5 ">
                                <p className="text-xs">{item.author}</p>
                                <p className="text-xs">{item.created_at}</p>
                            </div>
                        </div>
                    ))}
                </div>

            <div className="shadow-xl border-t rounded-xl w-1/6 h-screen pt-1 pl-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta distinctio dolore perspiciatis. Asperiores assumenda autem delectus dolorum ducimus earum eligendi fugit harum minus molestiae nostrum odit omnis, quibusdam veniam.</p>
            </div>

        </div>
    )
}

export default Home;