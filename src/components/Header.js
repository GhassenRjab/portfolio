import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar" aria-label="Ghassen Rjab">
            <img src={avatar} alt="Ghassen Rjab" />
          </a>
          <h1>
            <strong>Hi, I am Ghassen Rjab </strong>
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
