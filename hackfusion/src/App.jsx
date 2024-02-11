import { useEffect, useState } from "react";
// App.jsx
import { storage } from "./firebase-config";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

import { v4 as uuidv4 } from "uuid"; // Import UUID for generating unique filenames
import Navbar from "./components/Navbar";
import Feed from "./components/PostBlock";
import Chat from "./pages/Chat";
import Setting from "./pages/Setting";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Search from "./components/Search";
import Notification from "./pages/Notification";
import AskDoubts from "./pages/AskDoubts";
import ConnectWithFriends from "./pages/ConnectWithFriends";
import ConnectWithFaculty from "./pages/ConnectWithFaculty";
import Login from "./components/Login/Login";
import Form from "./components/Form";
import Register from "./components/Register/Register";
import LoginOrSigUp from "./pages/LoginOrSignUp";
import PostBlock from "./components/PostBlock";
function App() {
  const [textInput, setTextInput] = useState("");
  const [fileInput, setFileInput] = useState(null);
  const [postedMessages, setPostedMessages] = useState([]);
  const [postedContent, setPostedContent] = useState([]);

  // const handlePost = () => {
  //   if (textInput.trim() !== '') {
  //     // Handle posting
  //     setTextInput('');
  //     alert('Message posted successfully!');
  //   } else {
  //     alert('Please enter some text before posting.');
  //   }
  // };
  // const handlePost = () => {

  //   if (textInput.trim() !== '') {
  //     // Add the text input to the list of posted messages
  //     setPostedMessages([...postedMessages, textInput]);
  //     setTextInput('');
  //     alert('Message posted successfully!');
  //   } else {
  //     alert('Please enter some text before posting.');
  //   }
  // };

  const handlePost = async () => {
    if (textInput.trim() === "" && !fileInput) {
      alert("Please enter some text or upload an image before posting.");
      return;
    }

    try {
      let imageUrl = "";
      if (fileInput) {
        const imageName = uuidv4();
        const imageRef = storage.ref().child(`images/${imageName}`);
        await imageRef.put(fileInput);
        // Get the download URL of the uploaded image
        imageUrl = await imageRef.getDownloadURL();
      }

      // Add the text input and image URL to the list of posted content
      const newPost = { text: textInput, image: imageUrl };
      setPostedContent([newPost, ...postedContent]);
      setTextInput("");
      setFileInput(null);
      alert("Post created successfully!");
    } catch (error) {
      console.error("Error posting:", error);
      alert("An error occurred while posting. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (textInput.trim() !== "") {
      // Do something with the text input
      setTextInput("");
    }
    if (fileInput !== null) {
      // Do something with the file input
      setFileInput(null);
    }
  };

  const handleFileChange = (e) => {
    setFileInput(e.target.files[0]);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-row w-screen  h-screen">
        <div className="w-3/12 border-r-2 border-slate-300 ">
          <Navbar />
        </div>
        {/* feed div */}
        <div className="w-6/12">
          {/* <PostBlock /> */}
          <div className="display-post ml-20">
            {postedContent.map((post, index) => (
              <div key={index}>
                {/* Display text */}
                <p className="text-black text-lg">{post.text}</p>
                {/* Display image if available */}
                {post.image && <img src={post.image} alt="Posted" />}
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="sticky w-full ml-20 flex bottom-0 left-0 p-4 bg-gradient-to-b from-red-950  to-slate-950"
          >
            <input
              type="text"
              placeholder="Enter text..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="block ml-4  p-2 w-96 border-2  border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="fileButton"
              onClick={handlePost}
            />
            <label
              htmlFor="fileButton"
              className="inline-block cursor-pointer p bg-blue-500 hover:bg-blue-700  text-white font-bold pt-2 px-4 rounded"
            >
              Upload File
            </label>
            <button
              onClick={handlePost}
              type="submit"
              className="inline-block bg-green-500 -mr-40 w-40 hover:bg-green-700 text-white font-bold  
         px-4 rounded"
            >
              Post
            </button>
          </form>
        </div>
        <div className="fixed border-l-2 pl-10 top-0 right-0 h-screen w-3/12 bg-gradient-to-b from-red-950 to-slate-950 z-10">
          <Routes>
            {/* <route path="/" element={<LoginOrSigUp />}/> */}
            <Route path="/" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/notifications" element={<Notification />} />
            <Route
              path="/connectwithfriends"
              element={<ConnectWithFriends />}
            />
            <Route
              path="/connectwithfaculty"
              element={<ConnectWithFaculty />}
            />
            <Route path="/askdoubt" element={<AskDoubts />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/about" element={<About />} />

            <Route path="/sign-in" element={<Form />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
