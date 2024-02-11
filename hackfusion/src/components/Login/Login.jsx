import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
function Login() {
  return (
    <>
      <div>
        <div className="max-w-md relative flex flex-col p-4 my-20 rounded-md text-slate-100 ">
          <div className="text-2xl font-bold mb-2 text-purple-500 text-[#1e0e4b] text-center">
            Welcome back to <span className="text-[#7747ff]">App</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Log in to your account
          </div>
          <form className="flex flex-col gap-3">
            <div className="block relative">
              <label
                htmlFor="email"
                className="block text-slate-300 text-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                htmlFor="password"
                className="block text-slate-300 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div>
              <a className="text-sm text-[#7747ff]" href="#">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            <NavLink to="signup"> Don’t have an account yet?</NavLink>
            <a className="text-sm text-[#7747ff]" href="#">
              Sign up for free!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
