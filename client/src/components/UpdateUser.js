
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
const navigate = useNavigate();
const [inputUser, setInputUser] = useState({
    image:'',
    name:'',
    desc:'',
    amount:'',
    duration:''
  });
  
  const { id } = useParams();
//   const fetchSingleUser = async () => {
//     const res = await API.get(`/course/${id}`);
//     console.log(res.message);
//     setInputUser({

//         name: res.data.name,
//         desc: res.data.desc,
//         amount : res.data.amount,
//         duration : res.data.duration
//     });
//   };
//   useEffect(() => {
//     fetchSingleUser();
//   },[]);

  const handleChnage = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputUser);
    const res = await axios.put(`http://localhost:5000/api/edit/${id}`,inputUser);
    console.log(res);
    if (res.status === 200) {
      window.alert('Course updated successfully!');
      navigate('/courses');
    }
  };
  return (
    
    <>
    <div >
      <form onSubmit={handleSubmit}>
        <h2>Update Course</h2>
       
        <label >Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={inputUser.name}
            onChange={handleChnage}
          />

        <label >Description</label>
          <textarea
            type="text"
            name="desc"
            rows="4"
            placeholder="Enter description"
            value={inputUser.desc}
            onChange={handleChnage}
          />
        
        <label >Amount</label>
          <input
            type="text"
            name="amount"
            placeholder="Enter amount"
            value={inputUser.amount}
            onChange={handleChnage}
          />
          <label >Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="Enter amount"
            value={inputUser.duration}
            onChange={handleChnage}
          />
          <button type="submit" >Update Course</button>
      </form>
    </div>
    </>
  );
};
export default UpdateUser;