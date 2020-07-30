import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img src={Logo} alt="Logo BrunoFlix" />
      </Link>
    </FooterBase>
  );
}

export default Footer;