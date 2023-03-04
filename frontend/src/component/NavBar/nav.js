import React, {Fragment}from "react";
import './nav.css';
import logo from '../../image/Group 2logo.svg';
import search from '../../image/search.svg'
import chat from '../../image/chat.svg'
import user from '../../image/img_user.jpg'


class Navbar extends React.Component {
    render(){
        return(
            <Fragment>

                <div className="nav">
                    <div className="logo">
                        <img src= {logo} alt=""/>
                    </div>

                    <div className="tag">
                        <input type="text"/>
                    </div>

                    <div className="search">
                        <input type="text"/>
                        <button><img src={search} alt=""/></button>
                    </div>

                    <div className="chat">
                        <img src={chat} alt=""/>
                    </div>

                    <div className="profile">
                        <img src={user} alt=""/>
                    </div>
                </div>

            </Fragment>
        )
    }
}
export default Navbar;