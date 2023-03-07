import './App.css';
import Navbar from "./component/NavBar/nav";
import {BrowserRouter as Router} from "react-router-dom";
import Login from "./component/Login/login";
import {useEffect, useState} from "react";
import axios from 'axios';

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
