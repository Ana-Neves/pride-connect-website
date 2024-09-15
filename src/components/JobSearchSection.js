import React, { useState } from 'react';
import lgbtCoupleImage from '../assets/img/casallbgt.png'; // Certifique-se de ajustar o caminho da imagem
import '../jobsearchsection.css'; // Importe o arquivo CSS correspondente

function JobSearchSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sector, setSector] = useState('');
  const [jobType, setJobType] = useState('');
  const [level, setLevel] = useState('');

  const handleSearch = () => {
   
    console.log('Buscando vagas com:', {
      searchTerm,
      location,
      sector,
      jobType,
      level,
    });
  };

  return (
    <section className="job-search-section">
      <h2 className="encontre-vagas">
        Encontre Vagas<br />
        de Emprego<br />
        Inclusivas 🌈
      </h2>
      <p className="texto-encontre-vagas">
        Empresas que valorizam a diversidade estão aqui!
      </p>
      <img className="img-casal-lgbt" src={lgbtCoupleImage} alt="Casal LGBTQIA+" />

      <div className="div-1">
        <input
          type="text"
          placeholder="Digite o título da vaga ou empresa"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="barra-encontre-vagas"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Selecione a localização</option>
          <option value="cidade">Cidade</option>
          <option value="estado">Estado</option>
          <option value="pais">País</option>
        </select>
        <select
          className="barra-encontre-vagas"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
          <option value="">Selecione o setor</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="educacao">Educação</option>
          <option value="saude">Saúde</option>
        </select>
        <select
          className="barra-encontre-vagas"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">Selecione o tipo de trabalho</option>
          <option value="remoto">Remoto</option>
          <option value="presencial">Presencial</option>
          <option value="hibrido">Híbrido</option>
        </select>
        <select
          className="barra-encontre-vagas"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Selecione o nível</option>
          <option value="junior">Júnior</option>
          <option value="pleno">Pleno</option>
          <option value="senior">Sênior</option>
        </select>
        <button className="botao-buscar" onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </section>
  );
}

export default JobSearchSection;
