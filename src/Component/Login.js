import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home';

function Login() {

const[emaillog,setEmaillog]=useState();

const[passwordlog,setPasswordlog]=useState();

// This flag determines the form has been correctly filled or not
const[flag,setFlag]=useState(false);
// This home determines to redirect to home page or not
const[home,setHome]=useState(true);

function handleLogin(e)
{
     e.preventDefault();
    //  .replace(/"/g,""): This part uses the replace() method 
    // remove any double quotes (") that may be present in the
    // retrieved value. The regular expression /"/g matches all
    // occurrences of the double quote character, and the empty
    // string "" is used as the replacement, effectively removing
    // the double quotes.

    // The reason for removing the double quotes is that the value
    // stored in the local storage might have been originally saved
    // as a string, and the JSON.stringify() method used to store the
    // value could have added the double quotes around it.

    // This is a common practice when retrieving data from the local
    // storage, as it ensures that the retrieved value is in the
    // correct format for your application to use.

     let mail=localStorage.getItem("Email").replace(/"/g,"");
     let pass=localStorage.getItem("Password").replace(/"/g,"");

     if(!emaillog || !passwordlog){
        setFlag(true);
        console.log("Empty");

     }
     else if(passwordlog!==pass || emaillog!==mail)
     {
        setFlag(true);
     }
     else   //if evrything is correct
     {

        setHome(!home);  //set home false to true that is can go to homepage
        setFlag(false);   //No need to show message for form fillup
     }

}
  return (
    <div>
    {home ? (

    <form onSubmit={handleLogin}>
    <h1 class="ppp">Login</h1>
      <div className='form-group'>
             <label>Email</label>
             <input 
             type='email'
             className='form-control'
             placeholder='Enter Email'
             onChange={(event)=>setEmaillog(event.target.value)}
             />

        </div>

        <div className='form-group'>
             <label>Password</label>
             <input 
             type='password'
             className='form-control'
             placeholder='Enter Password'
             onChange={(event)=>setPasswordlog(event.target.value)}
             />

        </div>
        <button type='submit' className='btn btn-dark btn-lg btn-block'>Login</button>
        {flag && (
          <Alert color="primary" variant='danger'>
          Please fill Correct info
          </Alert>
        )}
        
        
        </form>
    ):(
         
         <Home/>
       
    )}

    </div>
  )
}

export default Login
