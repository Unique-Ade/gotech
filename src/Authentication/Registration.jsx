import React from "react";

const Registration = () => {
  return (
    <div className="registration">
      <h2 id="create-account">Create Your Account</h2>
      <div className="name">
        <div>
          <span>First Name</span> <b></b>
          <input type="text" placeholder="Enter First Name"  id="signUpInputName"/>
        </div>
        <div>
          <span>Last Name</span> <br />
          <input type="text" placeholder="Enter Last Name" id="signUpInputName" />
        </div>
      </div>
      <div className="email">
          <span>Email</span> <br />
          <input type="text" placeholder="Enter Email" id="signUpInput"/>
        </div>
        <div className="password">
          <span>Password</span> <br />

          <input type="text" placeholder="Enter Password" id="signUpInput" />
        </div>
        <div>
        <span>Confirm Password</span> <br />
        <input type="text" placeholder="Confirm Password" id="signUpInput" />
        </div>
        <button className="signUpBtn">Signup Now</button>
    </div>
  );
};

export default Registration;
