import React from 'react';
import './home.css';
import libimg from "../../images/image2.jpeg";

function home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${libimg})` }} >
      {/* <img src={libimg} alt="libimage" className='homeimg' /> */}
      <div className='details'>
        <h1 className='herohead'>LIBRARY MANAGEMENT SYSTEM</h1>
        <a href="/login" className='loginbtn'>Login</a>
        </div>
    </div>
  )
}

export default home;