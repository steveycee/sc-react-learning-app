import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Layout from "./layout-component/layout";

function Page() {
  return (
    <>
      <Layout />
    </>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
