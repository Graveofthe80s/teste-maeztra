import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../css/SectionCarousel.styles.css";

const SectionCarousel = () => {
  const items = [
    {
      src:
        "https://images.squarespace-cdn.com/content/v1/54340e70e4b0ebdd5103c677/1450972837480-75TUCJA28ILWVDFBMN35/ke17ZwdGBToddI8pDm48kKByzf79w4COl3pUgjPghPR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ooWhOa5cxQSJsU3rXf8luWNSkRYB6efHYMsnl_4FsHzJ1gIxLYqvFBQzbQ95Vq-bA/Astir+SS16+-+Akade+Wear+-+2016",
      title: "Promoções de Outono",
      text: "Confira os melhores looks para combinar com você nesse Outono",
    },
    {
      src:
        "https://images.squarespace-cdn.com/content/v1/54340e70e4b0ebdd5103c677/1449123255883-709R3EAMNOPHN0XR0YZ3/ke17ZwdGBToddI8pDm48kCdWoOSvy-nkoqKq6Ig0ILAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcEixSZdgNrMC_xsFNm2Yr5dmlgzATzgl-LYC61ut_iZBj_kwLH-wAWNJZN8tMd2SX/NewRetroWave+T-Shirt+-+Female+%28AKADE%29",
      title: "Promoções de Inverno",
      text: "Confira os melhores looks para combinar com você nesse Inverno",
    },
    {
      src: "https://live.staticflickr.com/5453/30229879420_88776dac09_b.jpg",
      title: "Promoções de Verão",
      text: "Confira os melhores looks para combinar com você nesse Verão",
    },
  ];
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(items[index]);
  const setBefore = (e) => {
    e.preventDefault();
    let i = index;

    if (i === 0) {
      setItem(items[2]);
      setIndex(2);
    } else {
      setItem(items[i - 1]);
      setIndex(i - 1);
    }
  };
  const setAfter = (e) => {
    e.preventDefault();
    let i = index;

    if (i === 2) {
      setItem(items[0]);
      setIndex(0);
    } else {
      setItem(items[i + 1]);
      setIndex(i + 1);
    }
  };
  return (
    <>
      <div className="carousel-container">
        <div className="carousel-background">
          <img
            src={item.src}
            alt="carousel-background"
            className="carousel-img"
          />
        </div>
        <div className="carousel-content">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <button className="carousel-btn">Conferir</button>
        </div>
        <div className="chevron">
          <FaChevronLeft id="left" onClick={(e) => setBefore(e)} />
          <FaChevronRight id="right" onClick={(e) => setAfter(e)} />
        </div>
      </div>
    </>
  );
};

export default SectionCarousel;
