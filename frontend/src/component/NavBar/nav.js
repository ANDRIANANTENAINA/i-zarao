import React, {Component, Fragment}from "react";
import './nav.css';
import '../../index.css';
import logo from '../../image/Group 2logo.svg';
import user from '../../image/img_user.jpg'
import {Link} from "react-router-dom";


class Navbar extends Component {

    showNotif() {
        const notif = document.querySelector('.notif');
        notif.classList.toggle('active');
    }
    render(){
        return(
            <Fragment>

                <div className="nav shadow-xl z-30">
                    <Link to="/home" className="logo">
                        <img src= {logo} alt=""/>
                    </Link>
                    <div className="flex flex-row justify-between w-full mx-5">
                        <div className="flex flex-row space-x-5 items-center justify-center">
                            <div className="tag">
                                <input className="p-2 rounded shadow" type="text"/>
                            </div>

                            <div className="search">
                                <input className="p-2 rounded shadow" type="text"/>
                            </div>

                            <div>
                                <button className="text-black hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392l.604.646l2.121-2.121l-.646-.604l-1.392-1.358a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.967 6.967 0 0 0 16 9c0-3.859-3.141-7-7-7S2 5.141 2 9s3.141 7 7 7z"/></svg>
                                </button>
                            </div>

                            <Link to="/chat" className="chat text-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.533 0a1.816 1.816 0 0 0-1.816 1.816v2.832h11.178c1.043 0 1.888.855 1.888 1.91v8.204h2.906a1.816 1.816 0 0 0 1.817-1.817V1.816A1.816 1.816 0 0 0 21.689 0H7.533zM2.311 5.148A1.816 1.816 0 0 0 .494 6.965V23.09c0 .81.979 1.215 1.55.642l3.749-3.748h10.674a1.816 1.816 0 0 0 1.816-1.816V6.965a1.816 1.816 0 0 0-1.816-1.817H2.31Z"/></svg>
                            </Link>

                            <div className="flex flex-col">
                                <div className="count-notif absolute top-7 ml-3 bg-red-600 rounded-full text-white px-1">
                                    9+
                                </div>
                                <div className="text-black hover:text-white" onClick={this.showNotif}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="currentColor" d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66ZM256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480Z"/></svg>
                                </div>
                                <div className="notif active rounded shadow-2xl absolute p-2 z-30">
                                    gvudyuybduybdu
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="profile flex flex-row space-x-2 items-center">
                                <div>
                                    <h3>ANDRIARILALA</h3>
                                    <p>Herizo Niaina</p>
                                </div>
                                <Link to="/profile">
                                    <img src={user} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}
export default Navbar;