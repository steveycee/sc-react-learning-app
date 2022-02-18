import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Layout from "./pages/layout/layout";

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
