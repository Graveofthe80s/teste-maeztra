import React from "react";
import { GiWorld, GiCardExchange, GiPriceTag, GiTruck } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";

import "../css/SectionInfo.styles.css";

const SectionInfo = () => {
  const infos = [
    {
      icon: <GiWorld />,
      title: "Produtos Importados",
      text: "Produtos de Alta Qualidade",
    },
    {
      icon: <FaWarehouse />,
      title: "Estoque no Brazil",
      text: "Produtos mais perto de você!",
    },
    {
      icon: <GiCardExchange />,
      title: "Troca Garantida",
      text: "Trocas em até 48 horas, veja as regras",
    },
    {
      icon: <GiPriceTag />,
      title: "Ganhe 5% off",
      text: "Pagando à vista no cartão",
    },
    {
      icon: <GiTruck />,
      title: "Frete Grátis",
      text: "Em compras acima de R$499,00",
    },
  ];
  const title = "Por que comprar na Maeztra?";
  return (
    <>
      <div className="section-title">
        <span>{title}</span>
      </div>
      <div className="section-info">
        <ul className="section-info-list">
          {infos.map((info) => (
            <li className="section-info-item">
              {info.icon}
              <div className="section-info-card">
                <span className="info-title">{info.title}</span>
                <span className="info-text">{info.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SectionInfo;
