import React from 'react';
import logo from '../assets/img/prideconnect-logo.png';
import '../header.css';


function Header() {
  return (
    <header>
      <p className="home-header">home</p>
      <p className="about-header">sobre</p>
      <p className="vagas-header">vagas inclusivas</p>
      <p className="direitos-header">direitos trabalhistas</p>
      <p className="programas-header">programas</p>
      <img src={logo} alt="logo da Pride Connect" />
    </header>
  );
}

export default Header;
