import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Layout from "./components/layout/layout";

function Page() {
  return (
    <>
      <Layout />
    </>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
