import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const LoginPage = () => {
    console.log("LoginPage component rendered");
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Convert inputs to lowercase and check if they match the expected values
        if (name.toLowerCase() === 'rakshita' && password.toLowerCase() === 'i love you too') {
            // Redirect to home page if credentials are correct
            window.location.href = '/home'; // Replace with your actual homepage route
        } else {
            // Show error message if credentials are incorrect
            setError('Invalid username or password');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-lightblue p-5">
            <form
                className="flex flex-col bg-lightblue p-6 rounded-md border-4 border-black shadow-lg gap-4"
                onSubmit={handleLogin}
            >
                <div className="text-black font-bold text-xl mb-5">
                    Welcome,
                    <br />
                </div>

                <label className="text-black font-semibold" htmlFor="email">
                    Princess's Name
                </label>
                <input
                    className="w-64 h-10 border-2 border-black bg-beige rounded-md p-2 text-white font-semibold focus:border-blue-500 outline-none"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="text-black font-semibold" htmlFor="password">
                    I Love You
                </label>
                <input
                    className="w-64 h-10 border-2 border-black bg-beige rounded-md p-2 text-white font-semibold focus:border-blue-500 outline-none"
                    id="password"
                    name="password"
                    placeholder="Reply?"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-30 h-10 bg-beige border-2 border-black rounded-md shadow-md font-semibold text-black mt-10 hover:bg-blue-500">
                    Let's go &rarr;
                </button>

                {error && <div className="text-red-500 font-semibold mt-3">{error}</div>}
            </form>
        </div>
    );
};

export default LoginPage;
