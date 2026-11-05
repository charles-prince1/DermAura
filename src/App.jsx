
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
import { useTheme } from './context/ThemeProvider';

export default function App() {
  const {isLightMode} = useTheme()


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ 
      <>
      <Navbar />
      <HomePage />
      </>} />
      <Route path='/Cart-added' element={  
        < div className={`${isLightMode ? "bg-brand-50":"bg-brand-650/70"}`}>
        <Navbar />
        <CartProductPage />
        </div>} />
      {/* <Route path='/S' element={  <SignupWizard />} /> */}
    </Routes>
    </BrowserRouter>
  );
}
