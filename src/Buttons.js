import React, { useState } from "react";
import "./Buttons.css";
import axios from "axios";

export default function SearchButton() {
  let [city, setCity] = useState("");
  let [output, setOutput] = useState(false);
  let [result, setResult] = useState({});
  function submit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8239c94054675b27ae1319054495506d&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function showTemperature(response) {
    setOutput(true);
    setResult({
      Temperature: Math.round(response.data.main.temp),
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (output) {
    return (
      <div>
        <form onSubmit={submit}>
          <input
            type="search"
            onChange={updateCity}
            placeholder="Type a city"
          />
          <input type="submit" value="Search" />
          <br />
          <br />
        </form>
        <ui>
          <li>Temperature:{result.Temperature} °C</li>
          <li>Description:{result.Description}</li>
          <li>Humidity:{result.Humidity} %</li>
          <li>Wind:{result.Wind} km/h</li>
        </ui>
      </div>
    );
  } else {
    return (
      <form onSubmit={submit}>
        <input type="search" onChange={updateCity} placeholder="Type a city" />
        <input type="submit" value="Search" />
        <br />
        <br />
      </form>
    );
  }
}
