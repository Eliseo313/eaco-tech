import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>¡Descubre Nuestra App!</h1>
      <p>Tu solución para pedios de comida a domicilio.</p>
      <div>
      <button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.tuapp', '_blank')}>
          Proximamente en Android
        </button>
        <button onClick={() => window.open('https://apps.apple.com/app/id123456789', '_blank')}>
          Proximamente en iOS
        </button>
      </div>
    </header>
  );
}

export default Header;
