import './App.css';
import Home from "./component/Home/home";
import Navbar from "./component/NavBar/nav";
import Chat from "./component/Chat/chat";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from "./component/Profile/profile";
import Login from "./component/Login/login";
import {useEffect, useState} from "react";
import Post from "./component/Post/Post";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <div className="App">
                {!isLoggedIn &&
                    <Login/>
                }
                {isLoggedIn && (
                    <Router>
                        <Navbar onLogout={handleLogout} />
                    </Router>
                )}
        </div>
    );
}


export default App;
