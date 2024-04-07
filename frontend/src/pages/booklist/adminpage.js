// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import './adminpage.css';
// import { useNavigate } from 'react-router-dom';

// function Adminpage() {


//   const navigate = useNavigate();

//   const [data,setData] = useState([]);
//   useEffect (()=>{
//     axios.get('http://localhost:8081/admin')
//     .then(res=>setData(res.data))
//     .catch(err => console.log(err));
//   })


//   return (
//     <div className='adminpage'>
       
//       <button className='addbookbutton' onClick = {() => navigate("/admin/addbook")}>ADD BOOK</button>
//       <h1 className='centertopic'>LIST OF BOOKS</h1>

//       {/* {data.map(d => (
//       <ul key={d.id}>
//       <div className='firstcenter'>
       
//         <div className='rightcontent'>
//           <h1>Book Title : {d.title}</h1>
//           <p>Book Author: {d.author}</p>
//           <p>{d.subject}</p>
//           <p>{d.published}</p>
//           <p>{d.count}</p>
//         </div>
//       </div>
//       </ul>
//       ))} */}

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
//   );
// }

// export default Adminpage;


import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import './adminpage.css';

function Adminpage() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    axios.get(`http://localhost:8081/admin?_page=${currentPage}&_limit=${itemsPerPage}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [currentPage, itemsPerPage]);

  return (
    <div className='adminpage'>
      <button className='addbookbutton' onClick = {() => navigate("/admin/addbook")}>ADD BOOK</button>
      <h1 className='centertopic'>LIST OF BOOKS</h1>
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={[
          { field: 'title', headerName: 'Book Title', flex: 1 },
          { field: 'author', headerName: 'Author', flex: 1 },
          { field: 'subject', headerName: 'Subject', flex: 1 },
          { field: 'published', headerName: 'Published Year', flex: 1 },
          { field: 'count', headerName: 'Count', flex: 1 },
        ]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5,7,9,10]}
        checkboxSelection
      />
    </div>
    </div>
  );
}

export default Adminpage;






