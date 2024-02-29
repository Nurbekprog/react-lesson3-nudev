import React, { Component } from "react";
import "./Home.scss";
import homeBg from "../../assets/images/home-bg.svg";
class Home extends Component {
  render() {
    return (
      <div className="home-bg">
        <div className="background-image">
          <img src={homeBg} alt="" />
        </div>
        <div className="home-text home container">
          <div className="home-text-left">
            <p className="home-text-p1">LEANGROUP - тубы и этикетки</p>
            <h2>Ламинатные тубы</h2>
            <p className="home-text-p2">
              Используются для производства зубных паст. Широко применяются в
              сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
              химии и DIY (Do-it-Yourself).
            </p>
            <button>Каталог</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
