import React from "react";
import './home.css'
const Home = () =>{
    return(
        <div className="flex flex-row justify-between space-x-3 p-10">

            <div className="shadow-xl border-t rounded-xl w-1/6 h-screen pt-1 pl-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi fugiat laboriosam, natus nemo perferendis sapiente sed sequi tempore velit! Architecto aspernatur at atque commodi iure molestiae nam natus repellat.</p>
            </div>

            <div className="shadow-xl border-t rounded-xl w-2/3 h-screen pt-1 pl-1">
                <div className="card">
                    <p className="text-gray-500 hover:text-gray-700 ">0 votes</p>
                    <p className="text-indigo-800 hover:text-indigo-900 font-bold "> dolor sit amet, consectetur adipisicing elit. At commodi fugiat laboriosam, natus nemo</p>
                    <p className="text-gray-500 hover:text-gray-700 ">0 answers</p>
                    <div className="flex flex-row space-x-5 text-  ">
                        <p className="bg-amber-400 pt-1 pb-1 pl-2 pr-2 rounded hover:bg-amber-600 ">tag1</p>
                        <p className="bg-amber-400 pt-1 pb-1 pl-2 pr-2 rounded hover:bg-amber-600 ">tag1</p>
                        <p className="bg-amber-400 pt-1 pb-1 pl-2 pr-2 rounded hover:bg-amber-600 ">tag1</p>
                        <p className="bg-amber-400 pt-1 pb-1 pl-2 pr-2 rounded hover:bg-amber-600 ">tag1</p>
                    </div>
                    <p className="text-gray-500 hover:text-gray-700 ">0 views</p>
                    <div className="flex flex-row space-x-5 ">
                        <p>User</p>
                        <p>Date</p>
                    </div>
                </div>
                <hr className="mt-3"/>
            </div>

            <div className="shadow-xl border-t rounded-xl w-1/6 h-screen pt-1 pl-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta distinctio dolore perspiciatis. Asperiores assumenda autem delectus dolorum ducimus earum eligendi fugit harum minus molestiae nostrum odit omnis, quibusdam veniam.</p>
            </div>

        </div>
    )
}

export default Home;