import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../cssfiles/table.css';
import axios from 'axios';

const EditDelete = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/courselist")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEdit = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const handleDelete = async (courseId) => {
    const confirmDelete = window.confirm('Do you really want to delete?');
    
    if (confirmDelete) {
      try {
        const res = await axios.delete(`http://localhost:5000/api/delete/${courseId}`);
        
        if (res.status === 200) {
          window.alert('Course deleted successfully');
        }
        navigate(`/admin`);
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  return (
    <div>
      <div className='nav-menu'>
        <Link className="nav-l" to="/AddCourse">Add Course</Link>
        <Link className="nav-l" to="/studentData">Student Data</Link>
      </div>
      <div>
        <h2>All Courses</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course._id}>
                <td>{course.name}</td>
                <td>{course.desc}</td>
                <td>{course.amount}</td>
                <td>{course.duration}</td>
                <td>
                  <button onClick={() => handleEdit(course._id)} className="btn btn-primary mb-1">Edit</button>
                  <button onClick={() => handleDelete(course._id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditDelete;
