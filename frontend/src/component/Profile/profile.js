import React from "react";
import './profile.css';
import user from '../../image/img_user.jpg'
import Tabs from "../ProfileTab/Tabs";

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
                <Tabs>
                    <div label="Information" className="p-5">
                        <div>
                            <form>
                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="col-span-3 sm:col-span-2">
                                                <label htmlFor="company-website"
                                                       className="block text-sm font-medium text-gray-700">Nom</label>
                                                <div className="mt-1 flex rounded shadow-sm">
                                                    <input type="text" name="nom" id="nom"
                                                           className="block w-full flex-1 rounded-none border-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                           placeholder="nom"/>
                                                </div>
                                            </div>

                                            <div className="col-span-3 sm:col-span-2">
                                                <label htmlFor="company-website"
                                                       className="block text-sm font-medium text-gray-700">Prènoms</label>
                                                <div className="mt-1 flex rounded shadow-sm">
                                                    <input type="text" name="prenom" id="prenom"
                                                           className="block w-full flex-1 rounded-none border-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                           placeholder="Prènoms"/>
                                                </div>
                                            </div>

                                            <div className="col-span-3 sm:col-span-2">
                                                <label htmlFor="company-website"
                                                       className="block text-sm font-medium text-gray-700">E-mail</label>
                                                <div className="mt-1 flex rounded shadow-sm">
                                                    <input type="email" name="email" id="email"
                                                           className="block w-full flex-1 rounded-none border-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                           placeholder="addresse email"/>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                                        <button type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            Enregistrer
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                    <div label="Gestion mot de passe" className="p-5">
                        <form>
                            <div className="shadow sm:overflow-hidden sm:rounded-md">
                                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-3 gap-6">

                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="password"
                                                   className="block text-sm font-medium text-gray-700">Mot de passe
                                                Actuelle</label>
                                            <div className="mt-1 flex rounded shadow-sm">
                                                <input type="password" name="password" id="password"
                                                       className="block w-full flex-1 rounded-none border-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                       placeholder="Mot de passe Actuelle"/>
                                            </div>
                                        </div>

                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="newPassword"
                                                   className="block text-sm font-medium text-gray-700">Nouveau Mot de
                                                Passe</label>
                                            <div className="mt-1 flex rounded shadow-sm">
                                                <input type="password" name="newPassword" id="newPassword"
                                                       className="block w-full flex-1 rounded-none border-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                       placeholder="Nouveau mot de passe"/>
                                            </div>

                                        </div>

                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="confirmPassword"
                                                   className="block text-sm font-medium text-gray-700">Confirmer votre
                                                mot de
                                                passe</label>
                                            <div className="mt-1 flex rounded shadow-sm">
                                                <input type="password" name="confirmPassword" id="confirmPassword"
                                                       className="block w-full flex-1 rounded-none border-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                       placeholder="confirmer votre mot de passe"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                                    <button type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        Modifier
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div label="Mes Postes" className="p-5">
                        Nothing to see here, this tab is <em>extinct</em>!
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default Profile;