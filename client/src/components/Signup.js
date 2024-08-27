import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/signupin.css';

const Signup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                firstname,
                lastname,
                email,
                password,
                role
            });
            window.alert('Successfully signed up');
            console.log('Signup successful:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <div className="form-group">
                    <label>Firstname</label>
                    <input
                        type="text"
                        className="form-control"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Lastname</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div style={{display:'flex'}}>
                    <label>Role</label>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            id="student"
                            name="role"
                            value="student"
                            checked={role === 'student'}
                            onChange={(e) => setRole(e.target.value)}
                            className="form-check-input"
                        />
                        <label className="form-check-label" htmlFor="student">Student</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            id="admin"
                            name="role"
                            value="admin"
                            checked={role === 'admin'}
                            onChange={(e) => setRole(e.target.value)}
                            className="form-check-input"
                        />
                        <label className="form-check-label" htmlFor="admin">Admin</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
                <button type="button" onClick={handleLogin} className="btn btn-primary1">Login</button>
            </form>
        </div>
    );
};

export default Signup;
