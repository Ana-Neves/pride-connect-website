import React from 'react';
import pridepeople from '../assets/img/pridepeople-edited.png';
import '../herosection.css';

function HeroSection() {
  return (
    <section id="home" className="hero">
      <img className="img-pridepeople" src={pridepeople} alt="imagem das pride people" />
      <p className="bem">Bem</p> <p className="vindo">vindo</p> <p className="ao">ao</p>
      <h1 className="h1-PrideConnect">Pride Connect</h1>
      <p className="inclusao">inclusão</p> <p className="e">e</p> <p className="diversidade">diversidade</p>
      <p className="no">no</p> <p className="mercado">mercado de trabalho</p>
    </section>
  );
}

export default HeroSection;
