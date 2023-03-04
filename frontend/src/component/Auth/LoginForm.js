import { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/login', {
            port: 8000,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        const data = await response.json();

       if(response.ok){
           console.log(data.token);
           localStorage.setItem('token', data.token);
           window.location.href = '/';
       }else {
           alert(data.message);
       }


    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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

export default LoginForm;
