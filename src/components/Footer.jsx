import React from "react";
import { Facebook, Instagram, Logo, Pinterest, Tiktok, Twitter } from "./helper/Icons";

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <Logo />
      </div>

      <div className="redes-sociais">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Pinterest />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Tiktok />
        </a>
      </div>

      <div className="nav-footer">
        <div>
          <h3>Sobre a empresa</h3>
          <a href="#">Quem somos</a>
          <a href="#">Fale conosco</a>
        </div>

        <div>
          <h3>Políticas</h3>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Entrega</a>
          <a href="#">Política de Cupom e Descontos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
