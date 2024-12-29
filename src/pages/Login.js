import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Login.css';
function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === 'user@example.com' && password === '1234') {
            alert('Login successful!');
            setIsLoggedIn(true);
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>

            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
