import React from "react";
import './chat.css'


const Chat = () =>{
    return(
        <div className="flex flex-row p-5">
            <div className="title_tag w-1/6 h-screen">

                <h1 className="title">[ TAGS ]</h1>
                <input className="inputs animate-pulse px-2" type="text" placeholder="exemple: python"/>
                <input  className="inputs m-auto px-2" type="text"/>
                <input className="inputs px-2" type="text"/>

            </div>

            <div className="discus rounded w-5/6 h-screen shadow-md">
                <div className="flex flex-col mt-6 ml-5 mr-5">
                    <input type="text" className="px-2" placeholder="titre"/>
                </div>
                <div className="flex flex-col mt-5">
                    <textarea className="send_ms mx-5 rounded-2xl p-2 " placeholder="vos question ?"></textarea>
                    <div className="btn_ms mx-5 mt-5 space-x-2">
                        <input type="file"/>
                        <button className="bg-amber-400 px-2 rounded hover:bg-amber-600 ">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;