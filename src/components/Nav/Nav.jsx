import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  
  return <nav className="navegador"> <ul>
      
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">Lista de Pokemon</Link></li>

    </ul>
      </nav>
};

export default Nav;
