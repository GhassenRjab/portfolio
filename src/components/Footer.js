import React from "react";

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://github.com/GhassenRjab"
            className="icon fa-github"
            title="GitHub profile"
            aria-label="GitHub profile"
          >
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ghassenrjab/"
            className="icon fa-linkedin"
            title="LinkedIn profile"
            aria-label="LinkedIn profile"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:rjab.ghassen@gmail.com"
            className="icon fa-envelope-o"
            title="Email address"
            aria-label="Email address"
          >
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design:{" "}
          <a href="http://html5up.net" title="HTML5 UP">
            HTML5 UP
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
