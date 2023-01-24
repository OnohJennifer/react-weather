import React from "react";
import pic from "./images/weather-icon-png-11067.png";

import "./TodaysWeather.css";

export default function TodaysWeather() {
  return (
    <div className="TodaysWeather">
      <h1 id="city">Enugu</h1>,
      <span class="country" id="country">
        Nigeria
      </span>
      <ul>
        <li>
          Last updated: <span id="date">Sat Jan 21, 10:10</span>
        </li>
        <li id="description">Description</li>
      </ul>
      <div class="row first">
        <div class="col-6">
          <img src={pic} className="weather-icon" alt="weather-icon" />
          <span class="temperature" id="temperature"></span>
          <span class="units">
            <a href="/" id="cels" class="cels">
              °C
            </a>
            |
            <a href="/" id="fahr" class="fahr">
              °F
            </a>
          </span>
        </div>
        <div class="col-2">
          Wind
          <br />
          <span id="wind"></span> m/s
        </div>
        <div class="col-2">
          HUM
          <br />
          <span id="humidity"></span> %
        </div>
        <div class="col-2">
          PRES
          <br />
          <span id="pressure"></span> hPa
        </div>
      </div>
      <br />
    </div>
  );
}
