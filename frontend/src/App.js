import './App.css';
import Navbar from "./component/NavBar/nav";
import {BrowserRouter as Router} from "react-router-dom";
import Login from "./component/Login/login";
import {useEffect, useState} from "react";
import axios from 'axios';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}` // pass the token in the headers of the request
                    }
                });

                setUser(response.data); // set the user state with the response data
            } catch (error) {
                console.log(error);
            }
        };

        if (token) {
            setIsLoggedIn(true);
        }

        fetchUser();
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
                        <Navbar onLogout={handleLogout} users={user} />
                    </Router>
                )}
        </div>
    );
}


export default App;
