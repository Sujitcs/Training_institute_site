import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../cssfiles/allstyle.css';
import Coursetable from './Coursetable';
const AdminPanel = () => {
    const [ ,setUsers] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/list').then(response => setUsers(response.data));
        axios.get('http://localhost:5000/api/courselist').then(response => setCourses(response.data));
    }, []);


    return (
        <div>
               
            <h2>Admin Panel</h2>
            <div className='nav-menu'>
                <Link className="nav-l" to="/AddCourse">Add Course</Link>
                <Link className="nav-l" to="/editOrDelete">Edit or Delete course</Link>
                <Link className="nav-l" to="/studentData">Student Data</Link></div>
            
            <h5>Manage Courses :--</h5>
            <ul>
            <Coursetable courses={courses} />
            </ul>
        </div>
    );
};

export default AdminPanel;
