import React from 'react';
import girls from '../assets/img/girls.png';

function OfferingsSection() {
  return (
    <section>
      <h1 className="o-que">O que oferecemos</h1>
      <p className="texto-o-que">
        Com a Pride Connect, oferecemos uma solução completa e eficiente<br /> para conectar a comunidade LGBTQIA+ com oportunidades de<br /> trabalho inclusivas e recursos essenciais. Nossa plataforma oferece:
      </p>
      <p className="vagas-de-emprego">🧑‍💻Vagas de emprego inclusivas: Empresas comprometidas com a<br /> diversidade.</p>
      <p className="direitos-trabalhistas">⚖️Informações sobre direitos trabalhistas: Garantindo que você<br /> tenha acesso a seus direitos em qualquer lugar do mundo.</p>
      <p className="programas-de-mentoria">🎓Programas de mentoria e suporte: Conectando talentos com<br /> mentores que entendem suas necessidades.</p>
      <img className="img-girls" src={girls} alt="Imagem de meninas" />
    </section>
  );
}

export default OfferingsSection;
