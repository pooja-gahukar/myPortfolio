import React  from 'react'

import './App.css'
import NavbarC from './NavbarC.jsx';

import Academic from './Academic.jsx';
import Skills from './Skills.jsx';
import {Route,BrowserRouter as Router,Routes } from 'react-router-dom' ;
import H from './H.jsx';
import Footer from './Footer.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';



function App() {


  return (
    <>
    <Router>
      <div>
       <NavbarC/>
      
        <Routes>
        
           <Route path="/academic" element={<Academic/>}/>
            <Route path="/skills" element={<Skills/>}/>
            
             </Routes>
        </div>
    </Router>
<H/>
<Academic/>
<Skills/>
<Contact/>
<About/>
<Footer/>
  </>
    

    
  )
}

export default App
