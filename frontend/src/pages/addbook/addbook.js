import React, { useState } from 'react';
import './addbook.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Addbook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');
  const [published, setPublished] = useState('');
  const [count,setCount] = useState(' ');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/admin/addbook', {
        title: title,
        author: author,
        subject: subject,
        published: published,
        count: count
       // Assuming slots will always be 10
      });
      setSuccessMessage(response.data.message);
      setError('');
      alert(response.data.message);
      navigate("/admin");
      
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('Something went wrong. Please try again later.');
      }
      setSuccessMessage('');
    }
  };

  return (
    <div className='addbook'>
      <div className='centerbox'>
        <form onSubmit={handleSubmit}>
          <h1 className='loginheading'>ADD BOOK</h1>
          <label>BOOK TITLE</label>
          <br />
          <input
            type="text"
            placeholder="Enter Book Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <label>AUTHOR</label>
          <br />
          <input
            type="text"
            placeholder="Enter Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <br />
          <label>SUBJECT</label>
          <input
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <br />
          <label>PUBLISHED YEAR</label>
          <input
            type="text"
            placeholder="Enter published year"
            value={published}
            onChange={(e) => setPublished(e.target.value)}
            required
          />
          <br />
          <label>BOOK COUNT</label>
          <input
            type="text"
            placeholder="Enter Book Count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
          />
          <br />
          <button type="submit" className='addbtn'>ADD BOOK</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}

export default Addbook;
