// components/MentorshipSection.js
import React, { useState } from 'react';
import axios from 'axios';
import casalmeninas from '../assets/img/casalmeninas.png';
import '../mentorshipsection.css';

function MentorshipSection() {
  const [programas, setProgramas] = useState([]);
  const [area, setArea] = useState('');
  const [tipo, setTipo] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [error, setError] = useState(null);

  const fetchProgramas = async () => {
    try {
      console.log('Buscando programas com:', { area, tipo, localidade });
      const response = await axios.get('http://localhost:3002/programas-mentoria', {
        params: {
          area,
          tipo,
          localidade
        }
      });
      console.log('Dados recebidos:', response.data); // Log dos dados recebidos
      setProgramas(response.data);
      setError(null); // Limpar mensagens de erro
    } catch (error) {
      console.error('Erro ao buscar os programas de mentoria:', error);
      setError('Não foi possível buscar os programas de mentoria. Tente novamente mais tarde.');
    }
  };

  const handleBuscarProgramas = () => {
    fetchProgramas();
  };

  return (
    <section>
      <h1 className="programa-mentoria">
        Encontre o Programa de<br /> Mentoria Ideal<br /> para Você
      </h1>
      <img className="img-casal-para-meninas" src={casalmeninas} alt="Casal LGBTQIA+" />
      
      <div className="div-mentoria">
        <label className="label-titulo1" htmlFor="area">Área de Atuação</label>
        <select
          className="select1"
          id="area"
          name="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="marketing">Marketing</option>
          <option value="design">Design</option>
        </select>
      </div>

      <div>
        <label className="label-titulo2" htmlFor="tipo">Tipo de Mentoria</label>
        <select
          className="select2"
          id="tipo"
          name="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="carreira">Carreira</option>
          <option value="desenvolvimento_pessoal">Desenvolvimento Pessoal</option>
          <option value="lideranca">Liderança</option>
        </select>
      </div>

      <div>
        <label className="label-titulo3" htmlFor="localidade">Localidade</label>
        <select
          className="select3"
          id="localidade"
          name="localidade"
          value={localidade}
          onChange={(e) => setLocalidade(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="presencial">Presencial</option>
          <option value="remoto">Remoto</option>
          <option value="hibrido">Híbrido</option>
        </select>
      </div>
    
      <button className="botao-mentoria" onClick={handleBuscarProgramas}>
        Buscar
      </button>

      {error && <p className="error-message">{error}</p>} {/* Exibir mensagem de erro */}

      <div className="resultados-mentoria">
        <h2>Programas Encontrados:</h2>
        <ul>
          {programas.length > 0 ? (
            programas.map((programa, index) => (
              <li key={index}>
                <strong>Nome:</strong> {programa.nome} <br />
                <strong>Descrição:</strong> {programa.descricao}
              </li>
            ))
          ) : (
            <p>Nenhum programa encontrado.</p>
          )}
        </ul>
      </div>
    </section>
  );
}

export default MentorshipSection;
