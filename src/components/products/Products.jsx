import React, { Component } from 'react'
import './Products.scss';
import product1 from '../../assets/images/product1.png';
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";

class Products extends Component {
  render() {
    return (
      <div id='products' className="product container">
        <div className="product-title">
          <h2 className="product-title-h21">Наша</h2>
          <h2 className="product-title-h22">продукция</h2>
        </div>
        <div className="product-btns">
          <button>Ламинатные тубы</button>
          <button>Экструзионные тубы</button>
          <button>Другая упаковка</button>
        </div>
        <ul className="product-list">
          <li>
            <img src={product1} alt="" />
          </li>
          <li>
            <img src={product2} alt="" />
          </li>
          <li>
            <img src={product3} alt="" />
          </li>
          <li>
            <img src={product4} alt="" />
          </li>
          <li>
            <img src={product5} alt="" />
          </li>
        </ul>
        <button className='product-btn'>Перейти в каталог</button>
      </div>
    );
  }
}
export default Products;