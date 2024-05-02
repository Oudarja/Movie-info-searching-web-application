import { Alert } from 'react-bootstrap';
import React, { useState } from 'react'
import Login from './Login';

function Registration() {
  
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const[flag,setFlag]=useState(false);
  const[login,setLogin]=useState(true);



function handlesubmit(e)
{
   e.preventDefault();
   if(!name || !email|| !password)
   {
    setFlag(true);
   }
   else{
    setFlag(false);
    localStorage.setItem("Name",JSON.stringify(name));
    localStorage.setItem("Email",JSON.stringify(email));
    localStorage.setItem("Password",JSON.stringify(password));
    console.log("saved in local storage");
    setLogin(!login);
   }
}

function handleClick()
{
  setLogin(!login);

}

  return (
    <div className='p-4'>

    {/* when submission is done the corrsponding function works. 
        onsubmit is an event handler.

        function handlesubmit(e): This is the function that will be
         called when the form is submitted. It takes an e 
         parameter, which represents the event object for the form
         submission.
         e.preventDefault():The preventDefault() method is called on
         the event object (e). This prevents the default form
         submission behavior, which would typically cause the page to
         refresh or navigate to a new URL.


         The purpose of this code is to handle the form submission
         in a custom way, rather than allowing the default form
         submission behavior to occur. By preventing the default
         behavior with e.preventDefault(), the form submission will
         not cause the page to refresh or navigate to a new URL.
         Instead, the developer can add custom logic within the
         handlesubmit function to process the form data or perform
         other actions as needed.
    */}

    {login ? (
     <form onSubmit={handlesubmit}>
        <h1 class="ppp">Registration</h1>
        <div className='form-group'>
             <label>Name</label>
             <input 
             type='text'
             className='form-control'
             placeholder='Enter full Name'
            //  The provided code snippet is a React event handler
            // for the onChange event of an input field. It is used
            // to update the state of a component when the value of 
            //the input field changes.
            // onchange:This is an event prop in React that is used to listen
            // for changes in the value of an input element.
            // (event) => setName(event.target.value): This is the event handler 
            //function that will be called whenever the value of the input field
            // changes.
             onChange={(event)=>setName(event.target.value)}
             />

        </div>
        <div className='form-group'>
             <label>Email</label>
             <input 
             type='email'
             className='form-control'
             placeholder='Enter Email'
             onChange={(event)=>setEmail(event.target.value)}
             />

        </div>

        <div className='form-group'>
             <label>Password</label>
             <input 
             type='password'
             className='form-control'
             placeholder='Enter Password'
             onChange={(event)=>setPassword(event.target.value)}
             />

        </div>

        <button type='submit' className='btn btn-dark btn-lg btn-block'>Register</button>
        <p className="forgot-password text-right" onClick={handleClick}>Already registered {" "} login ?</p>

        {flag && (
          <Alert color="primary" variant='danger'>
          Please fill Every field
          </Alert>
        )}
     </form>
    ):(

       <Login/>

    )}

      
    </div>
  )
}

export default Registration
