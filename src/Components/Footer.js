import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/policies">
          <button className="btn-politicas">Ver Políticas</button>
        </Link>
      <p>© 2024 Delifast. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
