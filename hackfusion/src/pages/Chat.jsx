import React, { useState } from "react";
import ProfilePic from '../assets/profile.svg'
function Chat() {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow flex   mt-4 -ml-4 overflow-auto">
        <img src={ProfilePic} alt="userProfile" className="w-10 h-10 rounded-full" />
        <div className="text-white ">add user</div>
      </div>
      <div className="flex items-center space-x-5 w-full mb-4 -ml-4 shadow-md">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-md"
          placeholder="Enter your message"
          value={message}
          onChange={handleInputChange}
        />
        <button className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-md">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
