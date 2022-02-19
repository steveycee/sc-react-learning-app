import React from "react";
// import ReactDOM from "react-dom";
import "./layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../components/header/header";
import Navigation from "../../components/navigation/navigation";
import Home from "../../pages/home/home";
import PassingArgumentsEventHandler from "../../pages/passing-arguements/passing-arguments-event-handler";
import EventHandlers from "../../pages/event-handlers/event-handlers";
import Props from "../../pages/props/props";
import ReactEventObject from "../../pages/react-event-object/react-event-object";

function Layout() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />} />
          <Route
            path="passing-arguements"
            element={<PassingArgumentsEventHandler />}
          />
          <Route path="event-handlers" element={<EventHandlers />} />
          <Route path="props" element={<Props />} />
          <Route path="react-event-object" element={<ReactEventObject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
