import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import background from "./media/season.jpg";
import App from "./App";
import Link from "./Link";
import "./index.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div class="container">
        <div
          className="card text-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="card-header">
            <strong>Weather Report</strong>
          </div>
          <div className="row weatherForecast" id="forecast"></div>
          <App />
        </div>
      </div>
      <Link />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Weather />
  </StrictMode>,
  rootElement
);
