import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaPlus,
} from "react-icons/fa";

import "../css/Footer.styles.css";

const Footer = () => {
  const infos = [
    "Quem Somos",
    "Prazo de Envio",
    "Trocas e Devoluções",
    "Promoções e Cupons",
  ];
  const conta = ["Minha Conta", "Meus Pedidos", "Cadastre-se"];
  const find = ["Lojas", "Endereço"];
  const [inner, setInner] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setInner(window.innerWidth);
  });
  return (
    <>
      <div className="footer">
        <div className="footer-contact-us">
          <span>Receba Nossa Newsletter</span>
          <div className="footer-send">
            <input type="text" placeholder="Digite seu e-mail" />
            <button className="footer-btn">Enviar</button>
          </div>
        </div>

        <div className="footer-mid">
          <div className="footer-info">
            <div className="footer-info-mb">
              <span className="footer-info-title">Informações</span>
              {window.innerWidth <= 960 ? <FaPlus /> : null}
            </div>
            <div className="footer-links">
              {infos.map((link) => (
                <a href="/#" className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-info">
            <div className="footer-info-mb">
              <span className="footer-info-title">Minha Conta</span>
              {window.innerWidth <= 960 ? <FaPlus /> : null}
            </div>
            <div className="footer-links">
              {conta.map((link) => (
                <a href="/#" className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-info">
            <div className="footer-info-mb">
              <span className="footer-info-title">Onde nos Encontrar?</span>
              {window.innerWidth <= 960 ? <FaPlus /> : null}
            </div>
            <div className="footer-links">
              {find.map((link) => (
                <a href="/#" className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-media">
            <FaFacebookSquare />
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div className="cards">
            <FaCcVisa />
            <FaCcMastercard />
          </div>
          <div className="maeztra">
            <span>Powered by</span>
            <img
              src="https://maeztra.com/wp-content/uploads/2020/09/logo_Prancheta-1.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
