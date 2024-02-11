import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function LoginOrSignUp() {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      {/* Backdrop with blur effect */}
      <div style={{ backgroundImage: 'url("https://www.sggs.ac.in/uploads/home_banner/1665387599.png")' }} className="absolute bg-cover bg-no-repeat inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-md z-0"></div>
      {/* Login or Signup Form */}
      
    </div>
  );
}

export default LoginOrSignUp;