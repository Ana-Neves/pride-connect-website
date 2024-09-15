import React from 'react';
import lgbtgroup from '../assets/img/lgbtgroup.png';

function RightsSection() {
  return (
    <section>
      <h1 className="titulo-direitos">Conheça seus Direitos<br /> Trabalhistas LGBTQIA+<br /> no Mercado de Trabalho ⚖️</h1>
      <img className="img-casalheart" src={lgbtgroup} alt="casal LGBTQIA+" />
      <div className="barra-direitos">
        <input list="paises" id="pais" name="pais" placeholder="Selecione seu país" />
        <datalist id="paises">
          <option value="Brasil" />
          <option value="Argentina" />
          <option value="Estados Unidos" />
          <option value="Canadá" />
          <option value="Portugal" />
        </datalist>
        <button className="botao-direios" onClick={() => alert('Buscando direitos específicos')}>Buscar</button>
      </div>
    </section>
  );
}

export default RightsSection;
