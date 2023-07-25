import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import React from "react"
import ProjectPage from "./pages/ProjectPage"
import ContactPage from "./pages/ContactPage"


function App() {

  return (
    <main className="text-emerald-600 bg-neutral-800 body-font min-h-screen">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
    </BrowserRouter>
    </main>
    
      
   
  )
}

export default App
