import React, {Fragment}from "react";
import './nav.css'


class Navbar extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <div className="sidebar active">
                        <div className="logo_content">
                            <div className="logo">
                                <img src="" alt=""/>
                                    <div className="logo_name">
                                        ENS Admin
                                    </div>
                            </div>
                            <img src="images/menu-fill.svg" alt="" id="btn"/>
                        </div>
                        <ul className="nav_list">
                            <li>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg></span>
                                <input type="text" placeholder="Recherche..."/>
                                <span className="tooltype">Recherche</span>
                            </li>
                            <li>
                                <a href=""
                                   className="">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                               viewBox="0 0 24 24"><path fill="currentColor"
                                                                         d="M17.5 19h1v-2.5H21v-1h-2.5V13h-1v2.5H15v1h2.5Zm.5 2q-2.075 0-3.537-1.462Q13 18.075 13 16q0-2.075 1.463-3.538Q15.925 11 18 11t3.538 1.462Q23 13.925 23 16q0 2.075-1.462 3.538Q20.075 21 18 21ZM4 19V7l8-6l8 6v2.3q-.475-.15-.975-.225Q18.525 9 18 9V8l-6-4.5L6 8v9h5.075q.075.525.225 1.025q.15.5.375.975Zm8-8.75Z"/></svg></span>
                                    <span className="links_name">Accueil</span>
                                </a>
                                <span className="tooltype">Accueil</span>
                            </li>
                            <li>
                                <a href=""
                                   className="">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"/><path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"/></svg></span>
                                    <span className="links_name">Poster</span>
                                </a>
                                <span className="tooltype">Poster</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Navbar;