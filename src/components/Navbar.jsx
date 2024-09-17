import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link className="text-white" to="/">Home</Link></li>
        <li><Link className="text-white" to="/category/buzos">Buzos</Link></li>
        <li><Link className="text-white" to="/category/remeras">Remeras</Link></li>
        <li><Link className="text-white" to="/category/pantalones">Pantalones</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;