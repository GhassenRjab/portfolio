import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <OutboundLink
            href="https://twitter.com/GhassenRjab"
            className="icon fa-twitter"
            title="Twitter profile"
            aria-label="Twitter profile"
          >
            <span className="label">Twitter</span>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink
            href="https://github.com/GhassenRjab"
            className="icon fa-github"
            title="GitHub profile"
            aria-label="GitHub profile"
          >
            <span className="label">Github</span>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink
            href="https://www.linkedin.com/in/ghassenrjab/"
            className="icon fa-linkedin"
            title="LinkedIn profile"
            aria-label="LinkedIn profile"
          >
            <span className="label">LinkedIn</span>
          </OutboundLink>
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
          <OutboundLink href="http://html5up.net" title="HTML5 UP">
            HTML5 UP
          </OutboundLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
