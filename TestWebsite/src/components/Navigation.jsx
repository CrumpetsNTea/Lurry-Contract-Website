import React from 'react';
import '../styles/Navigation.css';


export default function Navigation() {

  return (
    <div className="navbar">
      <img src="/images/SLSlogo.png" alt="Secret Lurry Society Logo" className="logo"/>
      <section className="nav-items">
        <a href="/about">About</a>
        <a href="/roadmap">Roadmap</a>
        <a href="/faq">FAQ</a>
      </section>
      </div>
  );
};

