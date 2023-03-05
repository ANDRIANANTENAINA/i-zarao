import React from "react";
import './chat.css'

const Chat = () =>{
    return(
        <div className="flex flex-row p-5 chat_body">
            <div className="title_tag w-1/6 h-screen shadow-xl border-2 border-gray-200">

                <h1 className="title  w-full">[ tags ]</h1>
                <input className="inputs animate-pulse px-2" type="text" placeholder="exemple: python"/>
                <input  className="inputs m-auto px-2" type="text"/>
                <input className="inputs px-2" type="text"/>

            </div>

            <div className="discus w-5/6 h-screen shadow-xl mx-3">
                <div className="flex flex-col mt-6 ml-5 mr-5">
                    <input type="text" className="px-2 rounded focus:outline-none border-2 border-gray-200" placeholder="titre"/>
                </div>
                <div className="flex flex-col mt-5">
                    <textarea className="send_ms mx-5 rounded p-2 border-2 border-gray-200 " placeholder="vos question ?"></textarea>
                    <div className="btn_ms mx-5 mt-5 space-x-2">
                        <input type="file" id="file" className="input_file"/>
                        <label for="file" className="bg-[#10A37F] p-2 shadow text-white font-bold rounded" > Parcourir</label>
                        <button className="bg-[#1197f5] p-2 shadow text-white font-bold rounded">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;