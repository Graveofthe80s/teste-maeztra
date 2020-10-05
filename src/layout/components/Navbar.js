import React, { Component } from "react";
import { GrSearch } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

import "../css/Navbar.styles.css";

class Navbar extends Component {
  state = {
    topHeaderText: "Acompanhe as melhores promoções aqui na Maeztra.",
    menuItems: [
      "Novidades",
      "Vestidos",
      "Roupas",
      "Sapatos",
      "Lingerie",
      "Acessórios",
      "OUTLET",
    ],
    innerWidth: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ innerWidth: window.innerWidth });
    });
  }

  render() {
    const menuItems = this.state.menuItems;
    const topHeaderText = this.state.topHeaderText;

    const innerW = this.state.innerWidth <= 960;

    return (
      <nav className="header-container">
        <div className="top-header">
          <p>{topHeaderText}</p>
        </div>
        <div className="header">
          <div className="header-primary">
            {innerW && <GiHamburgerMenu />}
            <h1 className="header-logo">MAEZTRA</h1>
            <div className="header-search">
              {!innerW && (
                <input
                  type="text"
                  className="header-search-field"
                  placeholder="O que você busca?"
                />
              )}
              {innerW ? (
                <GrSearch />
              ) : (
                <button className="header-search-btn">Buscar</button>
              )}
            </div>
            {!innerW && (
              <div className="header-items">
                <a href="/#" className="header-item">
                  Minha Conta
                </a>
                <a href="/#" className="header-item">
                  Minha Conta
                </a>
                <a href="/#" className="header-item">
                  Meu Carrinho
                </a>
              </div>
            )}
          </div>
        </div>
        {!innerW && (
          <div className="header-menu">
            <nav className="header-menu-nav">
              <ul className="header-menu-list">
                {menuItems.map((item) => (
                  <li className="header-menu-item">
                    <a href="/#">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;
