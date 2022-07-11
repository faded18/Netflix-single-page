import React, { useState } from "react";
import { useRef } from "react";
import "./Register.scss";
const Register = () => {
const[email,setEmail]=useState("");
const[pass,setPass]=useState("");
const emailRef=useRef()
const passRef=useRef()

const handleclick=()=>{
  setEmail(emailRef.current.value)

}
const handlepass=()=>{

  setPass(passRef.current.value)
}

  return (
    <div className="register">
      <div className="top">
        <div className="iconbtn">
          <img
            className="imge" alt="hello"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          />
          <button>Sign In</button>
        </div>
      </div>
      <div className="text">
        <h1>Unlimted movies,TV shows,and many more</h1>
        <h3>Watch anywhere.Cancel Anytime</h3>
        <p>
          Ready to watch .Enter your email to create or restart your membership
        </p>
        {!email ?( <div className="inp">
          <input type="text" placeholder="Enter Email" ref={emailRef} ></input>
          <button onClick={handleclick}>Get started</button>
        </div>):
        (<form className="inp">
          <input type="password" placeholder="Enter PassWord" ref={passRef} ></input>
          <button onClick={handlepass}>Let's Finish</button>
        </form>
      )  }
       
      
      </div>
    </div>
  );
};

export default Register;
