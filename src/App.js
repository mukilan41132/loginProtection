import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './pages/Login';
import '../src/pages/Styles/Comman-style.css';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>

      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <Routes>

        <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {isLoggedIn && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/products" element={<Products />} />
          </>
        )}

        {!isLoggedIn && (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
