import React, { Component } from 'react'
import './News.scss';
import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";
import news3 from "../../assets/images/news3.png";
export default class News extends Component {
  render() {
    return (
      <div id='news' className="news container">
        <h2>Новости</h2>
        <ul>
          <li>
            <img src={news1} alt="" />
            <p>28.01.2022</p>
            <h4>"ЛеанГрупп" серебряный призер EcoVadis!</h4>
          </li>
          <li>
            <img src={news2} alt="" />
            <p>21.01.2022</p>
            <h4>"ЛеанГрупп" серебряный призер EcoVadis!</h4>
          </li>
          <li>
            <img src={news3} alt="" />
            <p>16.12.2021</p>
            <h4>Туба, как вид упаковки</h4>
          </li>
        </ul>
        <button>Все новости</button>
      </div>
    );
  }
}
