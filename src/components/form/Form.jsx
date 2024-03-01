import React, { Component } from "react";
import "./Form.scss";
import formBanner from "../../assets/images/form-banner.png";
class Form extends Component {
  render() {
    return (
      <div
        id="form"
        className="form container"
        style={{ backgroundImage: `url(${formBanner})` }}
      >
        <div className="form-title">
          <h2>Получить подробную </h2>
          <h2 id="form-title-h22">информацию</h2>
        </div>
        <p>
          Просто заполните форму, наш менеджер свяжется с вами в ближайшее время
        </p>
        <form>
          <input type="text" placeholder="Ваше имя" />
          <input type="tel" placeholder="+375 (29) 0000000" />
        </form>
        <textarea
          name="form"
          id="form-note"
          cols="30"
          rows="5"
          placeholder="Комментарий"
        ></textarea>
        <button>Получить информацию</button>
      </div>
    );
  }
}
export default Form;
