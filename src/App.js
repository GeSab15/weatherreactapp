import React from "react";
import Buttons from "./Buttons";
import "./App.css";

export default function App() {
  return (
    <div className="card-body">
      <h1 className="card-title">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          id="icon"
          alt="clear"
        />
      </h1>
      <p className="card-text">
        <span id="tempToday">-2</span>{" "}
        <span id="units">
          <a href="#" id="cel">
            °C
          </a>{" "}
          |{" "}
          <a href="#" id="fahr">
            °F
          </a>
        </span>
        <br />
        <span id="date"></span>
      </p>
      <p className="city" id="currentCity">
        Seoul
        <br />
      </p>
      <Buttons />
    </div>
  );
}