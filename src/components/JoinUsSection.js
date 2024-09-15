import React from 'react';
import handsheart from '../assets/img/handsheart.png';

function JoinUsSection() {
  return (
    <section>
      <h1 className="junte-se">Junte-se a Nós!</h1>
      <p className="junte-se-texto">
        Estamos orgulhosos de estar na vanguarda da luta por<br /> um mercado de trabalho mais inclusivo e justo.<br /> Convidamos você a explorar nossa API, compartilhar<br /> com sua rede e se juntar a nós nessa jornada para<br /> promover a inclusão e diversidade no local de trabalho.
      </p>
      <img className="img-hands-heart" src={handsheart} alt="mãos e coração" />
    </section>
  );
}

export default JoinUsSection;
