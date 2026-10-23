
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Features from './component/Features';
import About from './component/About';
// import Product from './component/Product';
import Footer from './component/Footer';
import LandingPage from './component/trash';
import Navbar from './component/Header';
import CartProductPage from './Pages/CartProduct';
import HomePage from "./Pages/HomePage"
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ 
      <>
      <Navbar />
      <HomePage />
      </>} />
      <Route path='/Cart-added' element={  
        <>
        <Navbar />
        <CartProductPage />
        </>} />
      {/* <Route path='/S' element={  <SignupWizard />} /> */}
    </Routes>
    </BrowserRouter>
  );
}