import React from 'react'
// import { BrowserRouter,Route,Routes,Router } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import WomenVideo from './Components/Images/luxehome.webm'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage videoSrc={WomenVideo} title="AUTUMN WINTER 2024-2025 COLLECTION" text="An incandescent odyssey between two symbolic eras, the Dior autumn-winter 2024-2025 ready-to-wear line, conceived by Maria Grazia Chiuri, reveals models that shine with the strength of a bold femininity."/>}>                            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
