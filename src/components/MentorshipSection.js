import React from 'react';
import casalmeninas from '../assets/img/casalmeninas.png';
import '../mentorshipsection.css';


function MentorshipSection() {
  return (
    <section>
      <h1 className="programa-mentoria">Encontre o Programa de<br /> Mentoria Ideal<br /> para Você</h1>
      <img className="img-casal-para-meninas" src={casalmeninas} alt="Casal LGBTQIA+" />
      
      <div className="div-mentoria">
        <label className="label-titulo1" htmlFor="area">Área de Atuação</label>
        <select className="select1" id="area" name="area">
          <option value="">Selecione</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="marketing">Marketing</option>
          <option value="design">Design</option>
        </select>
      </div>
      <div>
        <label className="label-titulo2" htmlFor="tipo">Tipo de Mentoria</label>
        <select className="select2" id="tipo" name="tipo">
          <option value="">Selecione</option>
          <option value="carreira">Carreira</option>
          <option value="desenvolvimento_pessoal">Desenvolvimento Pessoal</option>
          <option value="lideranca">Liderança</option>
        </select>
      </div>
      <div>
        <label className="label-titulo3" htmlFor="localidade">Localidade</label>
        <select className="select3" id="localidade" name="localidade">
          <option value="">Selecione</option>
          <option value="presencial">Presencial</option>
          <option value="remoto">Remoto</option>
          <option value="hibrido">Híbrido</option>
        </select>
      </div>
    
      <button className="botao-mentoria" onClick={() => alert('Buscando programas de mentoria')}>Buscar</button>
    </section>
  );
}

export default MentorshipSection;
