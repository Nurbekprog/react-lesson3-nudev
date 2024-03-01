import { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Sertificates from "./components/sertificates/Sertificates";
import Products from "./components/products/Products";
import Form from "./components/form/Form";
import Team from "./components/team/Team";
import News from "./components/news/News";
import BackToTopButton from "./components/backtop/BackToTopButton";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Sertificates />
        <Products />
        <Form />
        <Team />
        <News />
        <BackToTopButton />
      </div>
    );
  }
}

export default App;
