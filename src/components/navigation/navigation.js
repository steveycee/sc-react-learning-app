import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="nav">
        <ul>
          <ul>
            <li>
              <Link to="/react" className="nav-section">
                React Home
              </Link>
            </li>
            <ul>
              <li>
                <Link to="/props">Props</Link>
              </li>
              <li>
                <Link to="/event-handlers">Event Handlers</Link>
              </li>
              <li>
                <Link to="/passing-arguements">Passing Arguements</Link>
              </li>
              <li>
                <Link to="/react-event-object">React Event Object</Link>
              </li>
              <li>
                <Link to="/react/conditionals">Conditionals</Link>
              </li>
              <li>
                <Link to="/react/lists">Lists</Link>
              </li>
            </ul>
          </ul>

          <ul>
            <li>
              <Link to="/how-to" className="nav-section">
                How To Home
              </Link>
            </li>
            <ul>
              <li>
                <Link to="/how-to/code-blocks">Codeblocks</Link>
              </li>
            </ul>
          </ul>
        </ul>
      </nav>
    </>
  );
}
export default Navigation;
