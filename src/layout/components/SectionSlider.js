import React from "react";
import Carousel from "react-elastic-carousel";
import "../css/SectionSlider.styles.css";
import image from "../assets/model.jpg";

const SectionSlider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const items = [
    {
      src: { image },
      price: "R$ 500,00",
      name: "Faux Suede",
      desc:
        "A faux suede mini short featuring exposed button-front closures and panel seam construction.",
    },
    {
      link:
        "ttps://static.zara.net/photos///rw-center/2020/S/T/1/p/0342/701/513/2/w/1342/0342701513_1_1_1.jpg?ts=1601543080829",
      price: "R$ 500,00",
      name: "Faux Suede",
      desc:
        "A faux suede mini short featuring exposed button-front closures and panel seam construction.",
    },
    {
      link:
        "ttps://static.zara.net/photos///rw-center/2020/S/T/1/p/0342/701/513/2/w/1342/0342701513_1_1_1.jpg?ts=1601543080829",
      price: "R$ 500,00",
      name: "Faux Suede",
      desc:
        "A faux suede mini short featuring exposed button-front closures and panel seam construction.",
    },
    {
      link:
        "ttps://static.zara.net/photos///rw-center/2020/S/T/1/p/0342/701/513/2/w/1342/0342701513_1_1_1.jpg?ts=1601543080829",
      price: "R$ 500,00",
      name: "Faux Suede",
      desc:
        "A faux suede mini short featuring exposed button-front closures and panel seam construction.",
    },
    {
      link:
        "ttps://static.zara.net/photos///rw-center/2020/S/T/1/p/0342/701/513/2/w/1342/0342701513_1_1_1.jpg?ts=1601543080829",
      price: "R$ 500,00",
      name: "Faux Suede",
      desc:
        "A faux suede mini short featuring exposed button-front closures and panel seam construction.",
    },
    {
      link:
        "ttps://static.zara.net/photos///rw-center/2020/S/T/1/p/0342/701/513/2/w/1342/0342701513_1_1_1.jpg?ts=1601543080829",
      price: "R$ 500,00",
      name: "Faux Suede",
      desc:
        "A faux suede mini short featuring exposed button-front closures and panel seam construction.",
    },
    {
      link:
        "ttps://static.zara.net/photos///rw-center/2020/S/T/1/p/0342/701/513/2/w/1342/0342701513_1_1_1.jpg?ts=1601543080829",
      price: "R$ 500,00",
      name: "Faux Suede",
      desc:
        "A faux suede mini short featuring exposed button-front closures and panel seam construction.",
    },
    {
      link:
        "ttps://static.zara.net/photos///rw-center/2020/S/T/1/p/0342/701/513/2/w/1342/0342701513_1_1_1.jpg?ts=1601543080829",
      price: "R$ 500,00",
      name: "Faux Suede",
      desc:
        "A faux suede mini short featuring exposed button-front closures and panel seam construction.",
    },
    {
      link:
        "ttps://static.zara.net/photos///rw-center/2020/S/T/1/p/0342/701/513/2/w/1342/0342701513_1_1_1.jpg?ts=1601543080829",
      price: "R$ 500,00",
      name: "Faux Suede",
      desc:
        "A faux suede mini short featuring exposed button-front closures and panel seam construction.",
    },
  ];

  const title = "As Mais Pedidas";
  const colors = ["#B7DF69", "#1FD8D8", "#FBBC58", "#FF5976"];

  const colorBox = (color) => (
    <div className="cl-box" style={{ "background-color": color }}></div>
  );
  return (
    <div className="section-slider-container">
      <div className="slider-title">
        <span>{title}</span>
      </div>
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
          <div className="box">
            <img className="model" src={item.link} alt="" />
            <div className="card-details">
              <div className="color-box">
                {colors.map((color) => {
                  return colorBox(color);
                })}
              </div>
              <span className="offer-price">{item.price}</span>
              <span className="offer-name">{item.name}</span>
              <span className="offer-desc">{item.desc}</span>
              <button className="add-btn">Adicionar</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SectionSlider;
