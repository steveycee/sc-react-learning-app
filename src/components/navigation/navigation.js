import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        <p>Navigation Component</p>
        <ul>
          <ul>
            <li>
              <Link to="/react">React Home</Link>
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
            </ul>
          </ul>

          <ul>
            <li>
              <Link to="/how-to">How To Home</Link>
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
