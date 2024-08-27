import React from 'react';
import '../cssfiles/coursetable.css';

const Coursetable = ({ courses }) => {
    return (
        <table className="student-table">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => (
                    <tr key={course._id}>
                        <td>{course.name}</td>
                        <td>{course.desc}</td>
                        <td>{course.amount}</td>
                        <td>{course.duration}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Coursetable;
