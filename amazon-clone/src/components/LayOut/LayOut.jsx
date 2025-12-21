import React from "react";
import Header from "../header/Header";

function LayOut({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default LayOut;
