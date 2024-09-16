// components/RightsSection.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import lgbtgroup from '../assets/img/casalheart.png';
import '../rightssection.css';

function RightsSection() {
  const [direitos, setDireitos] = useState({});
  const [paisSelecionado, setPaisSelecionado] = useState('');

  const fetchDireitos = async (pais) => {
    try {
      const response = await axios.get(`http://localhost:3002/direitos-trabalhistas?pais=${pais}`);
      setDireitos(response.data);
    } catch (error) {
      console.error('Erro ao buscar os direitos trabalhistas:', error);
    }
  };

  const handleBuscarDireitos = () => {
    fetchDireitos(paisSelecionado);
  };

  return (
    <section id="direitos">
      <h1 className="titulo-direitos">
        Conheça seus Direitos<br />
        Trabalhistas LGBTQIA+<br />
        no Mercado de Trabalho ⚖️
      </h1>
      <img className="img-casalheart" src={lgbtgroup} alt="casal LGBTQIA+" />
      <div className="barra-direitos">
        <input
          list="paises"
          id="pais"
          name="pais"
          placeholder="Selecione seu país"
          onChange={(e) => setPaisSelecionado(e.target.value)}
        />
        <datalist id="paises">
          <option value="Brasil" />
          <option value="Argentina" />
          <option value="Estados Unidos" />
          <option value="Canadá" />
          <option value="Portugal" />
        </datalist>
        <button className="botao-direios" onClick={handleBuscarDireitos}>
          Buscar
        </button>
      </div>

      {/* Exibe os direitos */}
      {direitos && (
        <ul>
          {Object.keys(direitos).map((pais) => (
            <li key={pais}>
              <strong>{pais}:</strong> {direitos[pais]}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default RightsSection;
