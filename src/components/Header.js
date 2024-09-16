import React from 'react';
import logo from '../assets/img/prideconnect-logo.png';
import '../header.css';


function Header() {
  return (
    <header>
      <a href="#home"><p className="home-header">home</p></a>
      <a href="#about"><p className="about-header">sobre</p></a>
      <a href="#vagas"><p className="vagas-header">vagas inclusivas</p></a>
      <a href="#direitos"><p className="direitos-header">direitos trabalhistas</p></a>
      <a href="#programas"><p className="programas-header">programas</p></a>
      <img src={logo} alt="logo da Pride Connect" />
    </header>
  );
}

export default Header;
