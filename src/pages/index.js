import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Gallery from "../components/Gallery";

import thumb01 from "../assets/images/thumbs/01.jpg";
import thumb02 from "../assets/images/thumbs/02.jpg";
import thumb03 from "../assets/images/thumbs/03.jpg";
import thumb04 from "../assets/images/thumbs/04.jpg";
import thumb05 from "../assets/images/thumbs/05.jpg";
import thumb06 from "../assets/images/thumbs/06.jpg";
import thumb07 from "../assets/images/thumbs/07.jpg";

import full01 from "../assets/images/fulls/01.jpg";
import full02 from "../assets/images/fulls/02.jpg";
import full03 from "../assets/images/fulls/03.jpg";
import full04 from "../assets/images/fulls/04.jpg";
import full05 from "../assets/images/fulls/05.jpg";
import full06 from "../assets/images/fulls/06.jpg";
import full07 from "../assets/images/fulls/07.jpg";

const DEFAULT_IMAGES = [
  {
    source: full01,
    thumbnail: thumb01,
    caption: "Zoe",
    description:
      "Design, set up architecture and develop from scratch Zoe (the chatbot for Quicktext hotels) using Azure Bot Service, Cognitive Services and Node.js.",
  },
  {
    source: full02,
    thumbnail: thumb02,
    caption: "Paristay",
    description:
      "Full-stack development of Paristay using CodeIgniter. Improve SQL queries and site response time. Develop a dashboard dedicated to yield management.",
  },
  {
    source: full03,
    thumbnail: thumb03,
    caption: "WIKI.TOTAL",
    description: "Full-stack development of WIKI.TOTAL using CodeIgniter.",
  },
  {
    source: full04,
    thumbnail: thumb04,
    caption: "Fondation Lenval",
    description: "Front-end development and development of Drupal modules",
  },
  {
    source: full05,
    thumbnail: thumb05,
    caption: "Urofrance",
    description: "Front-end development and development of Drupal modules",
  },
  {
    source: full06,
    thumbnail: thumb06,
    caption: "SmartServices",
    description:
      "Development and maintenance of SmartServices using Java EE (spring, Hibernate and JSF), a POS Web application for restaurants.",
  },
  {
    source: full07,
    thumbnail: thumb07,
    caption: "BipSMS",
    description:
      "Set up and maintain the BipSMS SMS gateway server using Kannel and PlaySMS.",
  },
];

const HomeIndex = () => (
  <Layout>
    <Helmet>
      <title>
        Ghassen Rjab - Fullstack JavaScript Developer and problem solver
      </title>
      <meta
        name="description"
        content="This is the protfolio website of Ghassen Rjab, a Fullstack JavaScript Developer from Sfax, Tunisia. Based in Paris, France now."
      />
    </Helmet>

    <div id="main">
      <section id="one">
        <header className="major">
          <h2>Fullstack JavaScript Developer</h2>
        </header>
        <p>
          Fullstack JavaScript Developer with a rich experience in Chatbot and
          AI development. Creative, multi-skilled and self-contained, who loves
          facing challenges and solving complex problems with his keyboard.
        </p>
      </section>

      <section id="two">
        <h2>Recent Work</h2>

        <Gallery images={DEFAULT_IMAGES} />
      </section>

      <section id="three">
        <h2>Get In Touch</h2>
        <p>Want to hire me or get in touch with me? Send me a message.</p>
        <div className="row">
          <div className="12u">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="12u">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default HomeIndex;
