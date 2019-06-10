import React from "react";

import Footer from "./Footer";
import avatar from "../assets/images/avatar.jpg";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <img src={avatar} className="image avatar" alt="Ghassen Rjab" />
          <h1>
            <strong>Hi, I am Ghassen Rjab </strong>
            <br />
            Fullstack JavaScript Developer.
            <br />I love football, travelling and cats
          </h1>
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
