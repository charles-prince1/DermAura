import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import { CartProvider } from './context/CartProvider.jsx'
import App from './App.jsx'
// import ChatProvider from './context/chatContext.jsx'
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <CartProvider>
      <App/>
    </CartProvider>
   </ThemeProvider>
)
