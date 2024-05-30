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

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Registration Form Validation
    let isValid = true;
    let validationErrors = {};
    if (formData.fname === "" || formData.fname === null) {
      isValid = false;
      validationErrors.fname = "First name is required";
    }
    if (formData.lname === "" || formData.lname === null) {
      isValid = false;
      validationErrors.lname = "Last name is required";
    }
    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Enter a valid Email";
    }
    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "Password is required";
    } else if (formData.password.length <= 5) {
      isValid = false;
      validationErrors.email = "Password must be at least 6 characters";
    }
    if(formData.cpassword !== formData.password){
      isValid(false);
      validationErrors.cpassword = 'Password does not match';
    }

    setErrors(validationErrors);
    setValid(isValid);

    if(Object.keys(validationErrors).length === 0){
      alert('Registered Successfully')
    }
    fetch("http://localhost:5000/Users", {
      method: "POST",
      headers: { "Content-Type": "application/json " },
      body: JSON.stringify(formData),
    }).then(() => {
      console.log("New User Added");
    });
  };

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
            onChange={(e) =>
              setFormData({ ...formData, fname: e.target.value })
            }
          />
           {
        valid ? <></> : 
        //first name error Message
        <span className="error_text">
          {errors.fname}
        </span>
      }
        </div>
        <div>
          {/* last name */}
          <span>Last Name</span> <br />
          <input
            type="text"
            placeholder="Enter Last Name"
            id="signUpInputName"
            name="lname"
            onChange={(e) =>
              setFormData({ ...formData, lname: e.target.value })
            }
          />
         { <span className="error_text">
           {errors.lname}
        </span>
        }
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {
        valid ? <></> : 
        //email error Message
        <span className="error_text">
          {errors.email}
        </span>
      }
      </div>
      {/* password */}
      <div className="password">
        <span>Password</span> <br />
        <input
          type="text"
          placeholder="Enter Password"
          id="signUpInput"
          name="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
           {
        valid ? <></> : 
        //password error Message
        <span className="error_text">
          {errors.password}
        </span>
      }
     
      </div>
      <div>
        {/* confirm password */}
        <span>Confirm Password</span> <br />
        <input
          type="text"
          placeholder="Please Confirm Password"
          id="signUpInput"
          name="cpassword"
          onChange={(e) =>
            setFormData({ ...formData, cpassword: e.target.value })
          }
        />
           {
        valid ? <></> : 
        //confirm password error Message
        <span className="error_text">
          {errors.cpassword}
        </span>
      }
      </div>
      <button className="signUpBtn">Signup Now</button>
      <p className="alternative_Login" style={{ textAlign: "center" }}>
        Already have an account?, <Link to="/Login">Login Here</Link>
      </p>
    </form>
  );
};

export default Registration;
