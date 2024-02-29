import { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Sertificates from "./components/sertificates/Sertificates";
import Products from "./components/products/Products";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Sertificates />
        <Products />
      </div>
    );
  }
}

export default App;
