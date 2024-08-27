import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coursetable from './Coursetable';
import { useNavigate } from 'react-router-dom';

const Courses = ({ user }) => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const url="https://training-institute-site.vercel.app";
    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        axios.get(`${url}/api/courselist`)
            .then(response => {
                console.log('API Response:', response.data);
                if (Array.isArray(response.data)) {
                    setCourses(response.data);
                } else {
                    console.error('API did not return an array:', response.data);
                    setCourses([]); 
                }
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
                setCourses([]);
            });
    }, [user, navigate]);

    return (
        <div>
            <h2>Available Courses</h2>
            {user ? (
                <Coursetable courses={courses} />
            ) : (
                <p>You must be logged in to view the courses.</p>
            )}
        </div>
    );
};

export default Courses;
