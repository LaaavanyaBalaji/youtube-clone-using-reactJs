import './App.css';
import React, { useState } from 'react';
import Navbar from './pages/navbar';
import Header from './pages/header';
import MainContent from './pages/maincontent';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="App">
      <Header toggleNavbar={toggleNavbar} />
      <div className="content-wrapper">
        <Navbar visible={isNavbarVisible} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
