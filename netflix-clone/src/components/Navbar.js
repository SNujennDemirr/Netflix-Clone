import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Ana Sayfa</Link> {/* Ana sayfaya yönlendirir */}
    <Link to="/favorites">Favori Filmler</Link> {/* Favori filmler sayfasına yönlendirir */}
  </nav>
);

export default Navbar;
