import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        <p>Navigation Component</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
      </nav>
    </>
  );
}
export default Navigation;
