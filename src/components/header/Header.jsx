import React, { Component } from "react";
import "./Header.scss";
import logo from "../../assets/images/site-logo.svg";
class Header extends Component {
  render() {
    function mode() {
      document.body.classList.toggle("dark");
    }
    return (
      <div className="navbar">
        <nav className="container nav-content">
          <img className="logo" src={logo} alt="" />
          <ul>
            <li>
              <a href="">Продукция</a>
            </li>
            <li>
              <a href="">Сертификаты</a>
            </li>
            <li>
              <a href="">Наша команда</a>
            </li>
            <li>
              <a href="">О нас</a>
            </li>
            <li>
              <a href="">Новости</a>
            </li>
            <li>
              <a href="">Вакансии</a>
            </li>
            <li>
              <a href="">Контакты</a>
            </li>
          </ul>
          <button id="menu-btn">Menu</button>
          <button className="mode-btn" onClick={mode}>
            Mode
          </button>
        </nav>
      </div>
    );
  }
}

export default Header;
