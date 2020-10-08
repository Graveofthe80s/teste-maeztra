import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

import "../css/SectionBrands.styles.css";

const SectionBrands = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const title = "Marcas Parceiras";
  const brands = [
    "https://www.martensfashiongroup.com/wp-content/uploads/2017/03/logos-19-e1489408089340.png",
    "http://brunorezende.com.br/wp-content/uploads/2018/09/melissa-logo.png",
    "https://3.bp.blogspot.com/-g8uQT2BQbB8/VBLf88-DvQI/AAAAAAAAKg8/dSi2uUd3VP8/s1600/Forever-21-Logo%2B(1).jpg",
    "https://vectorlogo4u.com/wp-content/uploads/2019/02/ZARA-Logo-Vector.png",
    "https://pngimage.net/wp-content/uploads/2018/05/ann-taylor-logo-png-3.png",
  ];

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];
  return (
    <div className="section-brand-container">
      <div className="section-title">
        <span>{title}</span>
      </div>
      {width <= 960 ? (
        <Carousel breakPoints={breakPoints}>
          {brands.map((brand) => (
            <div className="section-brand-item">
              <img
                className="section-brand-logo"
                src={brand}
                alt="brand-logo"
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="section-brand">
          <ul className="section-brand-list">
            {brands.map((brand) => (
              <li className="section-brand-item">
                <img
                  className="section-brand-logo"
                  src={brand}
                  alt="brand-logo"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SectionBrands;
