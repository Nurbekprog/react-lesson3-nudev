import React, { Component } from "react";
import "./Sertificates.scss";
import serImg1 from "../../assets/images/ser-1.png";
import serImg2 from "../../assets/images/ser-2.png";
import serImg3 from "../../assets/images/ser-3.png";
import serImg4 from "../../assets/images/ser-4.png";
import serImg5 from "../../assets/images/ser-5.png";

class Sertificates extends Component {
  render() {
    return (
      <div className="sertificates container">
        <div className="sertificates-title">
          <h1>Качество продукции подтверждают сертификаты</h1>
        </div>
        <ul className="sertificates-carousel">
          <li>
            <img src={serImg1} alt="" />
          </li>
          <li>
            <img src={serImg2} alt="" />
          </li>
          <li>
            <img src={serImg3} alt="" />
          </li>
          <li>
            <img src={serImg4} alt="" />
          </li>
          <li>
            <img src={serImg5} alt="" />
          </li>
        </ul>
      </div>
    );
  }
}
export default Sertificates;
