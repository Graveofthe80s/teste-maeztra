import React from "react";
import "../css/SectionExtra.styles.css";

const SectionExtra = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <>
      <div className="extra">
        <div className="extra-container">
          <div className="extra-text">
            <h3>Lorem ipsum</h3>
            <p>{text}</p>
          </div>
          <div className="extra-image">
            <img
              src="https://www.blog.oticasdiniz.com.br/wp-content/uploads/2019/04/shutterstock_492476869_750x410px.jpg"
              alt=""
            />
          </div>
          <div className="extra-image-content">
            <p>Nova Coleção</p>
            <span>de outono-inverno</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionExtra;
