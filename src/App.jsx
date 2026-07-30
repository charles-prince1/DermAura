import { useState } from 'react'
import FeedBackDashboard from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<FeedBackDashboard />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
