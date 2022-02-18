import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
            <Link to="/passing-arguements">Passing Arguements</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navigation;
