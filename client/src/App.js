import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminPanel from './components/AdminPanel';
import Courses from './components/Courses';
import ContactUs from './components/ContactUs';
import AddCourse from './components/AddCourse';
import EditDelete from './components/EditDelete';
import Studentdata from './components/Studentdata';
import EditCourse from './components/EditCourse';

const App = () => {
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <Router>
            <Header user={user} handleLogout={handleLogout} />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/courses" element={<Courses user={user} />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/addCourse" element={<AddCourse />} />
                    <Route path="/course/:courseId" element={<EditCourse />} />
                    <Route path="/editOrDelete" element={<EditDelete />} />
                    <Route path="/Studentdata" element={<Studentdata />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
