import React from 'react';
import colorshearts from '../assets/img/colorshearts.png';
import '../missionsection.css';


function MissionSection() {
  return (
    <section>
      <h2 className="h2-nossa-missao">Nossa missão</h2>
      <p className="h2-text-2">
        Nossa missão é simples:<br /> criar um ambiente de<br /> trabalho mais justo,<br /> seguro e acessível para todos,<br /> independentemente de<br /> sua identidade de gênero<br /> ou orientação sexual.<br /> Acreditamos que todas as<br /> pessoas merecem a<br /> oportunidade de crescer<br /> profissionalmente sem<br /> enfrentar discriminação<br /> ou preconceito.
      </p>
      <img className="img-color-hearts" src={colorshearts} alt="corações coloridos" />
    </section>
  );
}

export default MissionSection;
