import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from 'react-router-dom';
import axios from 'axios';


const EditCourse = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState({
        name: '',
        desc: '',
        amount: '',
        duration: ''
    });

    useEffect(() => {
        
        axios.get(`http://localhost:5000/api/course/${courseId}`)
            .then((response) => {
                setCourse(response.data);
            })
            .catch((error) => {
                console.error('Error fetching course data:', error);
            });
    }, [courseId]);

    const handleChange = (e) => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:5000/api/edit/${courseId}`, course);
            if (res.status === 200) {
                alert('Course updated successfully');
                navigate('/admin');
            }
        } catch (error) {
            console.error('Error updating course:', error);
        }
    };

    return (
        <div>
            <div className='nav-menu'>
                <Link className="nav-l" to="/AddCourse">Add Course</Link>
                <Link className="nav-l" to="/editOrDelete">Edit or Delete course</Link>
                <Link className="nav-l" to="/studentData">Student Data</Link></div>
            <h2>Edit Course</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={course.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="desc"
                        value={course.desc}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={course.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input
                        type="text"
                        name="duration"
                        value={course.duration}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Course</button>
            </form>
        </div>
    );
};

export default EditCourse;
