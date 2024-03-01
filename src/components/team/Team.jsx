import React, { Component } from "react";
import "./Team.scss";
import lider1 from "../../assets/images/team-img1.png";
import lider2 from "../../assets/images/team-img2.png";
import lider3 from "../../assets/images/team-img3.png";
import lider4 from "../../assets/images/team-img4.png";
import lider5 from "../../assets/images/team-img5.png";
class Team extends Component {
  render() {
    return (
      <div id="team" className="team container">
        <div className="team-title">
          <h2>Наша</h2>
          <h2 id="h22">команда</h2>
        </div>
        <ul>
          <li>
            <img src={lider1} alt="" />
            <h4>Войнич Дарья</h4>
            <p>Заместитель директора по продажам</p>
            <h5>+375 (17) 270-53-77 (317)</h5>
            <h6>e.misnik@leangroup.by</h6>
          </li>
          <li>
            <img src={lider2} alt="" />
            <h4>Мисько Екатерина</h4>
            <p>Начальник отдела сопровождения</p>
            <h5>
              +375 (17) 270-53-77 (115) <br /> +375 29 112-73-48
            </h5>
            <h6>k.melnichenko@leangroup.by</h6>
          </li>
          <li>
            <img src={lider3} alt="" />
            <h4>Дмитроченко Дмитрий</h4>
            <p>Начальник отдела допечатной подготовки</p>
            <h5>
              +375 (17) 270-53-77 (333) <br /> +375 29 360-32-26
            </h5>
            <h6>dmitrochenko@leangroup.by</h6>
          </li>
          <li>
            <img src={lider4} alt="" />
            <h4>Антух Евгений</h4>
            <p>Начальник отдела снабжения</p>
            <h5>
              +375 (17) 270-53-77 (148) <br /> +375 44 764-16-28
            </h5>
            <h6>j.antuh@leangroup.by</h6>
          </li>
          <li>
            <img src={lider5} alt="" />
            <h4>Мисник Елена</h4>
            <p>Специалист по работе с клиентами</p>
            <h5>
              +375 (17) 270-53-77 (322) <br /> +375 29 329-34-03
            </h5>
            <h6>e.misnik@leangroup.by</h6>
          </li>
        </ul>
        <button>Наша команда</button>
      </div>
    );
  }
}
export default Team;
