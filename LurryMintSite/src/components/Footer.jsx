import React from 'react';
import '../styles/Footer.css';


function Footer () {

  return(
    <section className="footer">

      <section className="footer-info-left">
        <ul className="left-side-footer">
        </ul>
      </section>

      <section className="footer-info-center">
      <img src="/images/SLSlogo.png" alt="Secret Lurry Society Logo" className="logo"/>
      </section>

      <section className="footer-info-right">
        12 Floatie Lurrys quacking together on Ethereum.<br />
        ©2022 SECRET LURRY SOCIETY <br /> ALL RIGHTS RESERVED
      </section>

    </section>
 
  )

  
}

export default Footer;

