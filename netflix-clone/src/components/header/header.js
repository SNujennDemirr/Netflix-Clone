import React from 'react';
import './Header.css';
import logo from '../../public/assets/logo.svg';

const Header = () => (
  <header>
    <nav>
      <a className="logo" href="#"><img src={logo} alt="Logo" /></a>
      <a className="signin" href="https://www.netflix.com/login">Giriş Yap</a>
    </nav>
  </header>
);

export default Header;
