import React from "react";

import "../css/SectionBrands.styles.css";

const SectionBrands = () => {
  const title = "Marcas Parceiras";
  const brands = [
    "https://www.martensfashiongroup.com/wp-content/uploads/2017/03/logos-19-e1489408089340.png",
    "http://brunorezende.com.br/wp-content/uploads/2018/09/melissa-logo.png",
    "https://3.bp.blogspot.com/-g8uQT2BQbB8/VBLf88-DvQI/AAAAAAAAKg8/dSi2uUd3VP8/s1600/Forever-21-Logo%2B(1).jpg",
    "https://vectorlogo4u.com/wp-content/uploads/2019/02/ZARA-Logo-Vector.png",
    "https://pngimage.net/wp-content/uploads/2018/05/ann-taylor-logo-png-3.png",
  ];
  return (
    <>
      <div className="section-title">
        <span>{title}</span>
      </div>
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
    </>
  );
};

export default SectionBrands;
