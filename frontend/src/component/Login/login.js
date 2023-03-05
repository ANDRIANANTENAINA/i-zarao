// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import avatar from '../../image/avatar.svg';
import bg from '../../image/bg.svg';
import './Login.css';
import { myFunction } from "./myfunction";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/login', { email, password })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                window.location.href = response.data.redirectTo; // This is the line that redirects to the secret page
                setError(null);
            })
            .catch(error => {
                setError('Invalid email or password');
            });
    };

    myFunction();

    return (
        <div className="container">
            <div className="img">
                <img src={bg}/>
            </div>
            <div className="login-content">
                <form onSubmit={handleSubmit}>
                    {error && <div>{error}</div>}
                    <img src={avatar}/>
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder="Username" type="email"
                                       id="email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required/>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input type="password" className="input" placeholder="Password"
                                       id="password"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       required/>
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" className="btn" value="Login"/>
                </form>
            </div>
        </div>

    );
}

export default Login;
