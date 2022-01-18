import React from 'react';
import '../styles/Footer.css';
import { ReactDOM } from 'react';
import { SocialIcon } from 'react-social-icons';


function Footer () {

  return(
    <section className="footer">

      <section className="footer-info-left">
        <ul className="left-side-footer">
          <SocialIcon url="https://twitter.com/LurrySecret"/>
          <SocialIcon url="https://discord.com/channels/932802763690246214/932802763690246216" />
          <SocialIcon url="https://testnets.opensea.io/collection/secret-lurry-society" />
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

