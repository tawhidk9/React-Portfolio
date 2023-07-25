import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Navigation from "./components/Navigation"
import Project from "./components/project"
import Contact from "./components/Contact"



function App() {

  return (
    <main className="text-emerald-600 bg-neutral-800 body-font">
      <div className='App'>
      <Header/>
      <Navigation/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
        
    </main>
      
   
  )
}

export default App
