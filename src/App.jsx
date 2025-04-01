import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import Admission from './Admission/Admission'
import About from './About/About'
import Contact from './Contact/Contact'
export default function App() {
  return (
   <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
   </>
  )
}
