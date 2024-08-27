import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Studentdata = () => {
  const [studentData, setStudentData] = useState([]);
const url="https://training-institute-site.vercel.app";
  useEffect(() => {
    axios.get(`${url}/api/studentlist`)
      .then(response => {
        setStudentData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 


  return (
    
    <>
    <div> 
    <div className='nav-menu'>
                <Link className="nav-l" to="/AddCourse">Add Course</Link>
                <Link className="nav-l" to="/editOrDelete">Edit or Delete course</Link>
                
        </div>
    <div className="student-table-container">
        <h2>Student Data</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map(student => (
            <tr key={student.id}>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </>
  );
};

export default Studentdata;
