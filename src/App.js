import React from "react";

import Header from "./Header";
import TodaysWeather from "./TodaysWeather";
import GitLink from "./GitLink";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vanilla Weather App</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/f8f59c13bc.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <main className="container">
        <Header />
        <TodaysWeather />
      </main>
      <GitLink />
    </div>
  );
}
