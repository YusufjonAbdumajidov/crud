import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
   const [ books, setBooks ] = useState([]);

   useEffect(() => {
    const fetchAllBooks = async ()=> {
        try{
            const res = await axios.get("http://localhost:8800/books");
            setBooks(res.data);
        }catch(err){
            console.log(err)
        }
    }
    fetchAllBooks();
   }, []);

   const handleDelete = async (id) =>{
     try{
        await axios.delete("http://localhost:8800/books/"+id);
        window.location.reload()
     }catch(err){
        console.log(err)
     }
   }

  return (
    <div>
       <h1>Book shop</h1>
       {books.length === 0 ? <p>No books yet</p> : "" }
       <div className="books">
        {books.map(book => (
            <div className="book" key={book.id}>
                {/* {book.cover && <img src={book.cover} alt="" />} */}
                <img src="https://cdn.activestate.com/wp-content/uploads/2020/10/The-C-Programming-Language-e1603821228331.jpg" alt="" />
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}$</span>
                <section>
                  <button className="delete" onClick={()=> handleDelete(book.id)}>Delete</button>
                  <button className="update"><Link style={{color: "#fff"}} to={`/update/${book.id}`}>Update</Link></button>
                </section>
            </div>
        ))}
       </div>
       <button className='addBtn'><Link style={{color: "rgb(29, 195, 82)"}} to='/add'>Add new book</Link></button>
    </div>
  )
}

export default Books
