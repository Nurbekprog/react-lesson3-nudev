import React, { Component } from "react";
import "./About.scss";
import aboutVideo from "../../assets/images/about-video.svg";
class About extends Component {
  render() {
    return (
      <div id="about" className="about container">
        <div className="about-title">
          <h2>О компании</h2>
          <h1>LEANGROUP</h1>
        </div>
        <div className="about-inform">
          <img src={aboutVideo} alt="" />
          <ul>
            <li id="about-inform-li">
              Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
              сегодняшний день является ведущей компанией по производству
              ламинатных и экструзионных туб.
            </li>
            <li id="about-inform-li">
              Имея две технологии – для производства ламинатных и экструзионных
              туб, мы предлагаем вам широкий спектр возможностей. Большим
              преимуществом является собственный печатный цех в ламинате и
              in-line печать в экструзии с возможностью различных дополнительных
              опций декора. Особое внимание уделяется работе с поставщиками для
              контроля и поддержания качества производимой нами продукции.
            </li>
            <li id="about-inform-li">
              С января 2018 года компания стала членом Европейской Ассоциации
              производителей туб (ETMA), что подтверждает сильную позицию бренда
              и на рынке Европы.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
