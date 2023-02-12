// import axios from 'axios';
// import React, { useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';

// const Update = () => {

//     const [ book, setBook ] = useState({
//         title: "",
//         desc: "",
//         price: null,
//         cover: "",
//     });

//     const navigate = useNavigate();
//     const location = useLocation();

//     const bookId = location.pathname.split("/")[2];

//     const handleChange = (e) => {
//         setBook(prev=>({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const handleClick = async e =>{
//         e.preventDefault();
//         try{
//             await axios.put("http://localhost:8800/books/"+bookId, book)
//             navigate("/");
//         }catch(err){
//             console.log(err)
//         }
//     }

//   return (
//     <div className='form'>
//       <h1>Update the Book</h1>
//       <input type="text" placeholder='title' onChange={handleChange} name='title'/>
//       <input type="text" placeholder='desc' onChange={handleChange} name='desc'/>
//       <input type="number" placeholder='price' onChange={handleChange} name='price'/>
//       <input type="text" placeholder='cover' onChange={handleChange} name='cover'/>
//       <button className='formButton' onClick={handleClick}>Update</button>
//     </div>
//   )
// }

// export default Update



import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
      <button className="addBtn" onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Update;

