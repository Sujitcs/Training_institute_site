import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/signupin.css';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const url="https://training-institute-site.vercel.app";
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/api/signin`, { email, password });
            window.alert('successfully login');
            if (response.data.successful) {
                setUser(response.data);
                if (response.data.role === 'admin') {
                    navigate('/admin');
                } else if (response.data.role === 'student') {
                    navigate('/courses');
                } else {
                    console.error('Unexpected user role:', response.data.role);
                }
            } else {
                window.alert('try again!');
                console.error('Login failed:', response.data);
            }
        } catch (error) {
            window.alert('Login failed!');
            console.error('Login failed:', error);
        }
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="button" onClick={handleSignup} className="btn btn-primary1">Signup</button>
            </form>
        </div>
    );
};

export default Login;
