import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../cssfiles/home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/courselist')
            .then(response => setCourses(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container mt-0">
            <h2 className="full-width-container">Our Courses</h2>
            <div className="row">
                {courses.map(course => (
                    <div className="col-md" key={course._id}>
                        <div className="card mb-0">
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>
                                <p className="card-text">{course.desc}</p>
                                <p className="card-text"><b>Duration:</b> {course.duration}</p>
                                <p className="card-text"><b>Amount:</b> {course.amount}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
