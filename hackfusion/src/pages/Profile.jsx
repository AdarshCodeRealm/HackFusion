import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import profilePicture from "../assets/profile.svg";
function Profile() {
  const [userData, setUserData] = useState(0);

  // useEffect(() => {
  //   const auth = getAuth();
  //   const db = getFirestore();

  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const userDoc = await getDoc(doc(db, "users", user.uid));
  //       if (userDoc.exists()) {
  //         setUserData(userDoc.data());
  //       } else {
  //         console.log("No such document!");
  //       }
  //     } else {
  //       console.log("User is not signed in.");
  //     }
  //   });
  // }, []);

  // if (!userData) {
  //   return <div>Loading...</div>;
  // }

  const [userType, setUserType] = useState('anonymous'); // Default to 'anonymous'

  // ... other code ...

  const toggleUserType = () => {
    setUserType(prevType => prevType === 'anonymous' ? 'normal' : 'anonymous');
  };
  return (
    <div className="container mx-auto   px-4 py-5">
        <h1 className="text-3xl text-slate-300 font-bold mb-4">Profile Page</h1>
   <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img
          src={userData?.profilePicture || profilePicture}
          alt="Profile"
          className="mr-4 h-20 w-20 object-cover rounded-full shadow-lg"
        />
        <div>
          <h1 className="text-2xl font-bold">{userData?.firstName} {userData?.lastName}</h1>
        </div>
      </div>
    </div>
      <div className="mb-4">
      
        {userData.profilePicture && (
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="mt-4 h-32 w-32 object-cover rounded-full shadow-lg"
          />
        )}
      </div>
      <div className="mb-4">
        <label className="block  text-slate-400  text-lg font-bold mb-2">
          First Name:
        </label>
        <p>{userData.firstName}</p>
      </div>
      <div className="mb-4">
        <label className="block  text-slate-400  text-lg font-bold mb-2">
          Last Name:
        </label>
        <p>{userData.lastName}</p>
      </div>
      <div className="mb-4">
        <label className="block  text-slate-400  text-lg font-bold mb-2">
          Phone Number:
        </label>
        <p>{userData.number}</p>
      </div>
      <div className="mb-4">
        <label className="block  text-slate-400  text-lg font-bold mb-2">
          Email:
        </label>
        <p>{userData.email}</p>
      </div>
      <div className="mb-4">
        <label className="block  text-slate-400  text-lg font-bold mb-2">
          Anonymous Id:
        </label>
        <p>{userData.email}</p>
      </div>
      <div className="mb-4">
        <button
          onClick={toggleUserType}
          className={`px-4 py-2 rounded-md text-white ${userType === 'anonymous' ? 'bg-green-500' : 'bg-red-500'}`}
        >
          Switch to {userType === 'anonymous' ? 'Normal' : 'Anonymous'} User
        </button>
      </div>    </div>
  );
}

export default Profile;
