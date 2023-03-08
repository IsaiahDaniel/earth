import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from './components';
import { Home } from './pages';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;