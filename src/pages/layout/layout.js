import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import Navigation from "../../components/navigation/navigation";
import PassingArgumentsEventHandler from "../../pages/passing-arguements/passing-arguments-event-handler";

function Layout() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />} />
          <Route
            path="passing-arguements"
            element={<PassingArgumentsEventHandler />}
          />
        </Routes>
      </BrowserRouter>
      {/* <PassingArgumentsEventHandler /> */}
    </>
  );
}

// ReactDOM.render(<Layout />, document.getElementById("root"));

export default Layout;
