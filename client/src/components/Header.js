import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ user, handleLogout }) => {
    const navigate = useNavigate();

    const logout = () => {
        handleLogout();
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link custom-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link custom-link" to="/courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link custom-link" to="/ContactUs">Contact Us</Link>
                    </li>
                    {user ? (
                        <>
                            {user.role === 'admin' && (
                                <li className="nav-item">
                                    <Link className="nav-link custom-link" to="/admin">Admin Panel</Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <button className="btn btn-link nav-link custom-link" onClick={logout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <Link className="nav-link custom-link" to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
