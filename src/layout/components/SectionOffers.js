import React from "react";

import "../css/SectionOffers.styles.css";

const SectionOffers = () => {
  const title = "As Mais Pedidas";
  const cards = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="offer-container">
        <div className="offer-title">
          <span>{title}</span>
        </div>
        <div className="offer-slider">
          {cards.map((card) => (
            <div className="offer-card">
              <div className="offer-img">
                <img
                  src="https://static.zara.net/photos///rw-center/2020/S/T/1/p/0342/701/513/2/w/1342/0342701513_1_1_1.jpg?ts=1601543080829"
                  alt=""
                />
              </div>
              <div className="offer-content">
                <span className="offer-colors">XXXX</span>
                <span className="offer-price">R$ 500,00</span>
                <span className="offer-name">Faux Suede</span>
                <span className="offer-desc">
                  A faux suede mini short featuring exposed button-front
                  closures and panel seam construction.
                </span>
                <button className="add-btn">Adicionar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionOffers;
