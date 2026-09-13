// import { useState } from 'react'
// import './App.css'
// import Accordian from './component/Accordian'
// import SignupWizard from "./Pages/Signup.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// function App() {
  

//   return (
//    <BrowserRouter>
//     <Routes>
//       <Route exact path="/" element={<Accordian />} />
//       {/* <Route path="/signUp" element={<SignupWizard/> } /> */}
//     </Routes>
//    </BrowserRouter>
//   )
// }

// export default App

import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Features from './component/Features';
import About from './component/About';
// import Product from './component/Product';
import Footer from './component/Footer';
import LandingPage from './component/trash';
import HomePage from "./Pages/HomePage"
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={  <HomePage />} />
      <Route path='/A' element={  <LandingPage />} />
    </Routes>
    </BrowserRouter>
  );
}