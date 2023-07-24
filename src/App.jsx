import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Navigation from "./components/Navigation"
import Project from "./components/project"
import Contact from "./components/Contact"



function App() {

  return (
    <>
      <div className='App'>
      <Header/>
      <Footer/>
      <Navigation/>
      <Project/>
      <Contact/>
      </div>
        
    </>
  )
}

export default App
