import React from 'react';
import './register.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const [username,setUsername] = useState(' ')
  const [email,setEmail] = useState(' ')
  const [password,setPassword] = useState(' ')
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
     event.preventDefault();
     axios.post("http://localhost:8081/register",{username,email,password})
     .then(res=>{
      navigate('/login');
     }).catch(err => console.log(err));
  }



  return (
    <div className='register'>
        <div className='regbox'>
            <form onSubmit = {handleSubmit}>
                <h1 className='reghead'>New User Registration</h1>
                <label>Name</label>
                <br />
                <input type="text" placeholder="Enter Name" onChange = {e => setUsername(e.target.value)} required />
                <br/>
                <label>Email</label>
                <br />
                <input type="email" placeholder="Enter Email" onChange = {e => setEmail(e.target.value)} required />
                <br />
                <label>Password</label>
                <br />
                <input type="password" placeholder="Enter Password" onChange = {e => setPassword(e.target.value)} required />
                <br />
                <label>Confirm Password</label>
                <br />
                <input type="password" placeholder="Confirm Password" />
                <br />
                {/* <label>Gender</label>
                
                <input type="radio" value="Male" className='radioinput' onChange={e => setGender(e.target.value)} />Male
                <input type="radio" value="Female" className='radioinput' onChange={e => setGender(e.target.value)}/>Female
                <br /> */}

                <button type="submit" className='signinbtn'>REGISTER</button>
            </form>
        </div>
    </div>
  )
}

export default Register