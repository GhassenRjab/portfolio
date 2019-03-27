import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Hi, I am Ghassen Rjab</strong>
            <br />
            Chatbot/AI Developer, also Web developer.
            <br />I love football, travelling and cats
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
