import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;