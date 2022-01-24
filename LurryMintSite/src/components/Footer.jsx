import React from 'react';
import '../styles/Footer.css';
import { SocialIcon } from 'react-social-icons';


function Footer () {

  return(
    <section className="footer">

<section className="footer-info-center">
      <img src="/images/SLSlogo.png" alt="Secret Lurry Society Logo" className="logo"/>
      </section>

      <section className="footer-info-left">
        <div className="left-side-footer">
          <SocialIcon url="https://twitter.com/SecretLurry" className="twitter"/>
          <SocialIcon url="https://discord.com/channels/932802763690246214/932802763690246216"/>
          <a href="https://testnets.opensea.io/collection/secret-lurry-society"> <img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.png" className="opensea-logo"/></a>
        </div>
      </section>


      <section className="footer-info-right">
        12 Floatie Lurrys quacking together on Ethereum.<br />
        ©2022 SECRET LURRY SOCIETY <br /> ALL RIGHTS RESERVED
      </section>

    </section>
 
  )

  
}

export default Footer;

