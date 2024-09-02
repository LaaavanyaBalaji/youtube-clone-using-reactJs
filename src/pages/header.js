import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";


function Header({ toggleNavbar }) {
  return (
    <header className="header" style={{ display: 'flex', alignItems: 'center' }}>
      <IoMdMenu className="menu-icon" onClick={toggleNavbar} style={{ marginRight: '10px' }} />
      <h1 style={{
        backgroundColor: 'white', 
        color: 'red',
        margin: 0,
        padding: '20px',
        fontSize: '1.5rem',
        flexGrow: 1,   
        textAlign: 'start',
        borderBottom: '2px solid grey'
      }}>
        <FaYoutube style={{color:"red",marginRight:"10px"}}/><span>YOUTUBE</span></h1>
    </header>
  );
}

export default Header;
