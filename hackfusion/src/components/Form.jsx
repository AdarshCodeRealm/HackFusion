import React, {useState} from 'react'
import {signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../firebase-config";


function Form() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

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

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      alert("User loged in!");
      console.log(user);
      console.log(user.user.email);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };


  
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
    const [isAuth,setAuth]=useState(false);

    const signInWithGoogle=()=>{
      signInWithPopup(auth, provider).then((result)=>{
        localStorage.setItem("isAuth",true); 
        setAuth(true);
      })
    }
  return (
    <div>
      <div className="relative z-10">
        <div className="w-full mt-52 -ml-4 max-w-md p-6 mx-auto bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
          {isLogin ? (
            // Login Form
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setLoginEmail(event.target.value)
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setLoginPassword(event.target.value)
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            
               <button
                type="submit"
                onClick={login}
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                Log In
              </button>

              <button onclick={logout}>Logout</button>

               <p>User Logged In:</p>
               {user?.email}
              
               
            </form>
          ) : (
            // Signup Form
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value)
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setRegisterPassword(event.target.value)
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                onClick={register}
              >
                Sign Up
              </button>
              <button  onclick={signInWithGoogle}>login with google</button>
            </form>
          )}
          <p className="mt-4 text-center">
            {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
            <button onClick={toggleForm} className="ml-2 text-blue-500 hover:underline">
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Form
