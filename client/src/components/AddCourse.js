import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../cssfiles/addcourse.css";
const AddCourse = () => {
const navigate = useNavigate();
const [courseData, setCourseData] = useState({
    name: '',
    desc: '',
    amount: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };
const url="https://training-institute-site.vercel.app";
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await axios.post(`${url}/api/add`, courseData);
      window.alert('Course added successfully!');
      navigate('/courses');
      setCourseData({
        name: '',
        desc: '',
        amount: '',
        duration: '',
      })
    } catch (error) {
      console.error('Error adding course:', error.message);
    }
  };

  return (
    <>
    <div>
    <div className='nav-menu'>
                <Link className="nav-l" to="/editOrDelete">Edit or Delete course</Link>
                <Link className="nav-l" to="/studentData">Student Data</Link></div>
    <div className='containe'>
      <h2>Add New Course</h2>
      <form   onSubmit={handleSubmit}>
        <label htmlFor="name">Course Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={courseData.name}
          onChange={handleChange}
          placeholder='Enter name of course'
          required
        />
        <label htmlFor="desc">Description:</label>
        <textarea
          id="desc"
          name="desc"
          rows="4"
          value={courseData.desc}
          onChange={handleChange}
          placeholder='Enter description'
          required
        ></textarea>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={courseData.amount}
          onChange={handleChange}
          placeholder='Enter amount'
          required
        />

        {/* Duration */}
        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={courseData.duration}
          onChange={handleChange}
          placeholder='Enter duration'
          required
        />
        <button type="submit">Add Course</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddCourse;
