import React, { useEffect, useState } from "react";
import "./style.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase-config";
import { authenticate,GoogleAuthProviders } from "../GoogleSignIn/Config";
import { signInWithPopup } from "firebase/auth";
import Login from "../Login/Login";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [previewSource, setPreviewSource] = useState();

  const register = async () => {
    try {
        // Check if the email ends with "@sggs.ac.in"
        if (!registerEmail.endsWith('@sggs.ac.in')) {
          alert('Email must end with @sggs.ac.in');
        }
      else{

      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      alert("User created Sucessfully.")
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {};
  const logout = async () => {};

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewSource(null);
    }
  };

  // -------------------------------------
const [value,setValue]=useState("");
  const handleclicked =()=>{
  signInWithPopup(authenticate,GoogleAuthProviders)
    .then((data) => {
    setValue(data.user.email);
    localStorage.setItem("email",data.user.email);
    });
  }
  
useEffect(()=>{setValue(localStorage.getItem('email'))});
  
  return (
    <div>
      <div>
        <form className="form">
          <p className="title">Register </p>
          <p className=" text-slate-500">
            Signup now and get full access to our app.{" "}
          </p>
          <div className="relative  w-full mb-3">
            <label
              className="block uppercase text-slate-400 text-xs font-bold mb-2"
              htmlFor="profilePicture"
            >
              Profile Picture
            </label>
            <div className="avatar-wrapper flex  border-2 bg-center">
              {/* <img id="avatar" className="avatar align-middle  text-center" src={previewSource || '#'} alt="upload Picture" /> */}
              <input
                type="file"
                accept="image/*"
                id="profilePicture"
                className="absolute  inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className="flex">
            <label>
              <input required="" placeholder="" type="text" className="input" />
              <span>Firstname</span>
            </label>

            <label>
              <input required="" placeholder="" type="text" className="input" />
              <span>Lastname</span>
            </label>
          </div>

          <label>
            <input
              required=""
              placeholder=""
              type="email"
              className="input"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <span>Email</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="password"
              className="input"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            <span>Password</span>
          </label>
          <label>
            <input
              // required=""
              placeholder=""
              type="password"
              className="input"
            />
            <span>Confirm password</span>
          </label>
          <button className="submit" onClick={register}>
            Submit
            
          </button>
          {value?<Login/>:

            <button className="bg-slate-100 text-black" onClick={handleclicked} >Signin with google</button>
          }
          <p className="signin">
            {/* Already have an acount ? <a href="#">Signin</a>{" "} */}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
