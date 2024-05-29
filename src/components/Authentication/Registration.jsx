import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit =(e)=>{
     e.preventDefault(); 
     fetch('http://localhost:5000/Users', {
      method: 'POST',
      headers: {"Content-Type" : 'application/json '},
      body: JSON.stringify(formData)
      
    }).then(()=>{
      console.log('New User Added')
    })
    
    
  }

  
  return (
    <form className="registration" onSubmit={handleSubmit}>
      <h2 id="create-account">Create Your Account</h2>
      <div className="name">
        <div>
          {/* first name */}
          <span>First Name</span> <b></b>
          <input
            type="text"
            placeholder="Enter First Name"
            id="signUpInputName"
            name="fname"
            required
            onChange={(e) =>
              setFormData({ ...formData, fname: e.target.value })
            }
          />
        </div>
        <div>
          {/* last name */}
          <span>Last Name</span> <br />
          <input
            type="text"
            placeholder="Enter Last Name"
            id="signUpInputName"
            name="lname"
            required
            onChange={(e) =>
              setFormData({ ...formData, lname: e.target.value })
            }
          />
        </div>
      </div>
      {/* email */}
      <div className="email">
        <span>Email</span> <br />
        <input
          type="text"
          placeholder="Enter Email"
          id="signUpInput"
          name="email"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      {/* password */}
      <div className="password">
        <span>Password</span> <br />
        <input
          type="text"
          placeholder="Enter Password"
          id="signUpInput"
          name="password"
          required
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <div>
        {/* confirm password */}
        <span>Confirm Password</span> <br />
        <input
          type="text"
          placeholder="Please Confirm Password"
          id="signUpInput"
          name="cpassword"
          required
          onChange={(e) =>
            setFormData({ ...formData, cpassword: e.target.value })
          }
        />
      </div>
      <button className="signUpBtn">Signup Now</button>
      <p className="alternative_Login" style={{ textAlign: "center" }}>
        Already have an account?, <Link to="/Login">Login Here</Link>
      </p>
    </form>
  );
};

export default Registration;
