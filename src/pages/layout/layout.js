import React from "react";
// import ReactDOM from "react-dom";
import "./layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../components/header/header";
import Navigation from "../../components/navigation/navigation";
import Home from "../../pages/home/home";
import PassingArgumentsEventHandler from "../react/passing-arguements/passing-arguments-event-handler";
import EventHandlers from "../../pages/react/event-handlers/event-handlers";
import Props from "../react/props/props";
import ReactEventObject from "../../pages/react/react-event-object/react-event-object";
import Conditionals from "../../pages/react/conditionals/conditionals";
import Lists from "../../pages/react/lists/lists";
import ReactHome from "../../pages/react/react-home/react-home";
import HowToHome from "../../pages/how-to/how-to-home/how-to-home";
import HowToCodeBlocks from "../../pages/how-to/code-blocks/code-blocks-how-to";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Layout />}></Route>
            <Route index element={<Home />} />
            {/* React */}
            <Route path="react" element={<ReactHome />} />

            <Route
              path="passing-arguements"
              element={<PassingArgumentsEventHandler />}
            />
            <Route path="event-handlers" element={<EventHandlers />} />
            <Route path="props" element={<Props />} />
            <Route path="react-event-object" element={<ReactEventObject />} />
            <Route path="react/conditionals" element={<Conditionals />} />
            <Route path="react/lists" element={<Lists />} />
            <Route path="how-to" element={<HowToHome />} />
            <Route path="how-to/code-blocks" element={<HowToCodeBlocks />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Layout;
