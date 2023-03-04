import React from "react";
import './profile.css';
import user from '../../image/img_user.jpg'

const Profile = () =>{
    return(
        <div className="z-10">
            <div className="p-0 content z-1">
                <div className="p-2 bg-white shadow mt-24">
                    <div className="">
                        <div className="relative">
                            <div className="w-40 h-40 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <img className="w-full h-full rounded-full object-cover z-10"
                                     src={user}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 text-center border-b pb-4">
                        <h1 className="text-4xl font-medium text-gray-700">ANDRIANTSOA</h1>
                        <p className="font-light text-gray-600 mt-3">Valiavo Haja Ny Aina</p>
                        <p className="mt-8 text-gray-500">valiavoandriantsoa30@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="p-5">
            </div>
        </div>
    )
}

export default Profile;