import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import "./Feed.css"
function PostBlock({ isAuth, textProps = {} }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  // Default values for textProps
  const defaultTextProps = {
    titleLabel: "Default Title",
    titleInputLabel: "Title",
    postInputLabel: "Post",
    submitButtonText: "Submit"
  };

  // Merge default values with provided textProps
  const mergedTextProps = { ...defaultTextProps, ...textProps };

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage flex justify-center">
      <div className="cpContainer">
        <h1>{mergedTextProps.titleLabel}</h1>
        <div className="inputGp">
          <label>{mergedTextProps.titleInputLabel}:</label>
          <input
            className="text-slate-800"
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>{mergedTextProps.postInputLabel}:</label>
          <textarea
            className="text-slate-900"
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>{mergedTextProps.submitButtonText}</button>
      </div>
    </div>
  );
}

export default PostBlock;