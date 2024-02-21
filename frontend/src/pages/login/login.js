import React, { useState} from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const[IsAdmin,setIsAdmin] = useState(false);
  const[IsUser,setIsUser] = useState(false);
  const[adminemail,setAdminEmail] = useState(' ');
  const[adminpassword,setAdminPassword] = useState('');
  const[useremail,setUseremail] = useState(' ');
  const[userpassword,setUserpassword] = useState('');
  const navigate = useNavigate();

  const handleAdminSubmit = (e) => {
    e.preventDefault();

    if (adminemail === 'admin@gmail.com' && adminpassword === 'admin123')
    {
      navigate('/admin');
    }
    else
    {
      alert('Invalid Email or Password for Admin');
    }
  }

  const handleUserlogin = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: useremail, password: userpassword })
      });

      const data = await response.json();

      if (response.ok) {
          // Login successful, redirect to "/user" page
          navigate('/user');
      } else {
          // Login failed, display error message
          alert("Invalid Credentials");
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred, please try again later.');
  }
  }


  const handleadminclick = event => {
    setIsAdmin(current => !current);
    if(IsUser==true)
    {
        setIsUser(current => !current);
    }
  }

  const handleuserclick = event => {
    setIsUser(current => !current);
    if(IsAdmin==true)
    {
        setIsAdmin(current => !current);
    }
  }

  return (
    <div className='login'>
        <div className='loginbox'>
            <button className='aubtn' onClick={handleadminclick}>ADMIN</button>
            <button className='aubtn' onClick={handleuserclick}>USER</button>
            {IsAdmin && (
            <form onSubmit = {handleAdminSubmit}>
                <h1 className='loginheading'>ADMIN LOGIN</h1>
                <label>EMAIL</label>
                <br />
                <input type="email" placeholder="Enter Email" value={adminemail} onChange={(e) => setAdminEmail(e.target.value)} required />
                <br/>
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter Password" value={adminpassword} onChange={(e) => setAdminPassword(e.target.value)} required/>
                <br />
                <button type="submit" className='signinbtn'>SIGN IN</button>
            </form>
            )}
            {IsUser && ( 
            <form onSubmit={handleUserlogin}>
                <h1 className='loginheading'>USER LOGIN</h1>
                <label>EMAIL</label>
                <input type="email" placeholder='Enter Email' value={useremail} onChange={(e) => setUseremail(e.target.value)} required/>
                <br />
                <label>PASSWORD</label>
                <input type="password" placeholder='Enter Password' value={userpassword} onChange={(e) => setUserpassword(e.target.value)} required/>
                <br />
                <button type="submit" className='signinbtn'>SIGN IN</button>
               <p className="accreg">Does Have an Account?<a href="/register" className='regspan'> Register</a> Here.</p> 
            </form>
            )}
        </div>
    </div>
  )
}

export default Login