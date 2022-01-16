import React from 'react';
import '../styles/Navigation.css';



export default function Navigation() {

  return (
    <>
    <div className="navbar">
      <img src="/images/SLSlogo.png" alt="Secret Lurry Society Logo" className="logo"/>
      <nav>
        <ul className="nav-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Roadmap</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>
      <a className="mint" href="#">
        <button>Connect Wallet</button>
      </a>
      </div>
    </>
  );
};

