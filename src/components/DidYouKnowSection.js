import React from 'react';
import lgbtGroupImage from '../assets/img/lgbtgroup.png'; // Certifique-se de ajustar o caminho da imagem
import '../didyouknowsection.css'; // Importe o arquivo CSS correspondente

function DidYouKnowSection() {
  return (
    <section className="did-you-know-section">
      <h1 className="texto-voce-sabia">
        Você sabia que a maior Parada do<br />
        Orgulho LGBTQIA+ do mundo<br />
        aconteceu em São Paulo, Brasil.
      </h1>
      <p className="texto-voce-sabia-1">
        Houve 2,5 milhões de participantes no evento de 2006,<br />
        ganhando o reconhecimento do Livro Guinness de Recordes<br />
        Mundiais.
      </p>
      <img className="img-lgbt-group" src={lgbtGroupImage} alt="Grupo LGBTQIA+" />
    </section>
  );
}

export default DidYouKnowSection;
