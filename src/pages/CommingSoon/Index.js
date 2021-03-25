import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./Preloader";
import Timer from "./Timer";
import Optin from "./Optin";

import "./styles.css";

function CommingSoon() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        {/* <Optin /> */}
        <Preloader />
      </div>
    </div>
  );
}
export default CommingSoon;
