import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import ProfileUserIcon from "../assets/profile-user.svg"; // Adjust the path as needed
import Search from "../assets/search.svg";
import Notification from "../assets/notification.svg";
import Chat from "../assets/chat.svg";
import About from "../assets/about.svg";
import Setting from "../assets/setting.svg";
import AskaDoubt from "../assets/askadoubt.svg";
import ConnectWithFaculty from "../assets/connectfaculty.svg";
const Navbar = () => {
  return (
    <div className="  text-2xl fixed border-r-2  h-screen w-[30%] bg-gradient-to-b from-red-950 to-slate-950">
      <nav className="flex flex-col ml-10 pt-10">
        <div>
          <h1 className="font-bold  text-white text-5xl">Fusionite</h1>
          <p className="text-gray-200 tracking-widest text-sm">The SGGS Social Spark</p>
          </div>
        <div className="flex flex-col mx-auto space-y-2">
          <NavLink
            to="/"
            exact
            className="text-gray-200 flex  hover:text-white px-4 py-2"
          >
            <img
              src={ProfileUserIcon}
              alt="Map Marker Icon"
              className="nav-icon fill-white mr-6 mt-2 "
            />
            Profile
          </NavLink>
          <NavLink
            to="/search"
            className="text-gray-200 flex hover:text-white px-4 py-2"
          >
            <img
              src={Search}
              alt="Map Marker Icon"
              className="nav-icon  mr-6 mt-2 text-red-500"
            />
            Search
          </NavLink>
          <NavLink
            to="/notifications"
            className="text-gray-200 flex hover:text-white px-4 py-2"
          >
            <img
              src={Notification}
              alt="Map Marker Icon"
              className="nav-icon  mr-6 mt-2 text-red-500"
            />
            Notifications
          </NavLink>
          <NavLink
            to="/connectwithfriends"
            className="text-gray-200 flex hover:text-white px-4 py-2"
          >
            <img
              src={ConnectWithFaculty}
              alt="Map Marker Icon"
              className="nav-icon  mr-6 mt-2 text-red-500"
            />
            connnect with friends
          </NavLink>

          <NavLink
            to="/connectwithfaculty"
            className="text-gray-200 flex  hover:text-white px-4 py-2"
          >
            {" "}
            <img
              src={ConnectWithFaculty}
              alt="Map Marker Icon"
              className="nav-icon  mr-6 mt-2 text-red-500"
            />
            Connect with Faculty
          </NavLink>
          <NavLink
            to="/askdoubt"
            className="text-gray-200  flex  hover:text-white px-4 py-2"
          >
            {" "}
            <img
              src={AskaDoubt}
              alt="Map Marker Icon"
              className="nav-icon  mr-6 mt-2 text-red-500"
            />
            Ask Doubt
          </NavLink>
          <NavLink
            to="/chat"
            className="text-gray-200 flex  hover:text-white px-4 py-2"
          >
            {" "}
            <img
              src={Chat}
              alt="Map Marker Icon"
              className="nav-icon h-16 w-16 mr-6 mt-2 text-red-500"
            />
            Chat
          </NavLink>
          <NavLink
            to="/setting"
            className="text-gray-200 flex hover:text-white px-4 py-2"
          >
            {" "}
            <img
              src={Setting}
              alt="Map Marker Icon"
              className="nav-icon  mr-6 mt-2 text-red-500"
            />
            Settings
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-200 flex hover:text-white px-4 py-2"
          >
            {" "}
            <img
              src={About}
              alt="Map Marker Icon"
              className="nav-icon  mr-6 mt-2 text-red-500"
            />
            About Us
          </NavLink>
        </div>
        <NavLink
          to="/sign-in"
          className="text-gray-200 mt-4 w-3/4 mx-auto bg-orange-500 rounded-3xl text-center text-wrap  hover:text-black px-4 py-2"
        >
          Sign In
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
