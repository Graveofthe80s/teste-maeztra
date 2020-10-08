import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { GiWorld, GiCardExchange, GiPriceTag, GiTruck } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";

import "../css/SectionInfo.styles.css";

const SectionInfo = () => {
  const [width, setWidth] = useState(window.innerWidth);

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

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  return (
    <div className="section-info-container">
      <div className="section-title">
        <span>{title}</span>
      </div>
      {width <= 960 ? (
        <Carousel breakPoints={breakPoints}>
          {infos.map((info) => (
            <div className="section-info-item">
              {info.icon}
              <div className="section-info-card">
                <span className="info-title">{info.title}</span>
                <span className="info-text">{info.text}</span>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
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
      )}
    </div>
  );
};

export default SectionInfo;
