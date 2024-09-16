import React from 'react';
import '../footer.css'; // Importa o CSS do footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Sua Empresa. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="/politica-privacidade" className="footer-link">Política de Privacidade</a>
          <a href="/termos-uso" className="footer-link">Termos de Uso</a>
          <a href="/contato" className="footer-link">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
