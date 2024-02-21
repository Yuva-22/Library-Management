import React, { useState, useEffect } from 'react';
import './borrowbook.css';

function Borrowbook() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/user')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching Books:', error));
  }, []);

  const borrowbook = async (id) => {
    try {
      const response = await fetch('http://localhost:8081/user/borrowbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error('Failed to borrow book');
      }
      console.log('Borrowed book successfully');
      // Update the UI to reflect the booking
      // For example, you can remove the booked book from the list
      setBooks(Books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error in borrowing book:', error);
    }
  };

  return (
    <div className='borrowbook'>
      <div className="slotcontainer">

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
    {Books.map(book => (
      <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.subject}</td>
        <td>{book.published}</td>
        <td>{book.count}</td>
        <td><button onClick={() => borrowbook(book.id)}>Borrow Book</button></td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
    </div>
  );
}

export default Borrowbook;

