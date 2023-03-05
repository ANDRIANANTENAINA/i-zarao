// src/components/Login.js

import React, {useContext, useState} from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

function Login(props) {

    const {setUserData} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8000/api/login', { email, password })
            .then((response) => {
                console.log(response.data.user);
                localStorage.setItem('token', response.data.token);
                setUserData(response.data.user); // Set the user data in the context
                window.location.href = response.data.redirectTo;
                setError(null);
            })
            .catch((error) => {
                setError('Invalid email or password');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {error && <div>{error}</div>}
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Login
            </button>
        </form>
    );


}

export default Login;
