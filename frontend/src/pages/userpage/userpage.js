// import React,{ useState, useEffect } from 'react'
// import axios from "axios";
// import './userpage.css';
// import { useNavigate } from 'react-router-dom';

// function Userpage() {

//   const navigate = useNavigate();

//   const [data,setData] = useState([]);
//   useEffect (()=>{
//     axios.get('http://localhost:8081/user')
//     .then(res=>setData(res.data))
//     .catch(err => console.log(err));
//   })



//   return (
//     <div className='userpage'>
       
//        <button className='addcentre' onClick = {() => navigate("/user/borrowbook")}>BORROW BOOK</button>
//        <h1 className='centertopic'>LIST OF BOOKS</h1>
 

// <table>

// <thead>
//   <tr>
//     <th>Book Title</th>
//     <th>Author</th>
//     <th>Subject</th>
//     <th>Published Year</th>
//     <th>Count</th>
//   </tr>
// </thead>
// <tbody>
//   {data.map(d => (
//     <tr key={d.id}>
//       <td>{d.title}</td>
//       <td>{d.author}</td>
//       <td>{d.subject}</td>
//       <td>{d.published}</td>
//       <td>{d.count}</td>
//     </tr>
//   ))}
// </tbody>
// </table>
 
//     </div>
//   )
// }

// export default Userpage


import React, { useState, useEffect } from 'react';
import axios from "axios";
import './userpage.css';
import { useNavigate } from 'react-router-dom';

function Userpage() {

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8081/user')
      .then(res => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
    setFilterValue('');
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilter = () => {
    if (filterType && filterValue) {
      const filtered = data.filter(book => {
        switch (filterType) {
          case 'title':
            return book.title.toLowerCase().includes(filterValue.toLowerCase());
          case 'author':
            return book.author.toLowerCase().includes(filterValue.toLowerCase());
          case 'subject':
            return book.subject.toLowerCase().includes(filterValue.toLowerCase());
          case 'published':
            return book.published.toString().includes(filterValue);
          default:
            return false;
        }
      });
      setFilteredData(filtered);
    }
  };

  const handleResetFilter = () => {
    setFilteredData(data);
    setFilterType('');
    setFilterValue('');
  };

  return (
    <div className='userpage'>

      <button className='borrowbookbtn' onClick={() => navigate("/user/borrowbook")}>BORROW BOOK</button>
      <h1 className='centertopic'>LIST OF BOOKS</h1>

      <div className="filters">
        <select value={filterType} onChange={handleFilterChange}>
          <option value="">Select Filter</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="subject">Subject</option>
          <option value="published">Published Year</option>
        </select>
        {filterType && (
          <input type="text" className='filterinput' value={filterValue} onChange={handleFilterValueChange} />
        )}
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleResetFilter}>Reset</button>
      </div>

      <table>

        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Published Year</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(d => (
            <tr key={d.id}>
              <td>{d.title}</td>
              <td>{d.author}</td>
              <td>{d.subject}</td>
              <td>{d.published}</td>
              <td>{d.count}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Userpage;
