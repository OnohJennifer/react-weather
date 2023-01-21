import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form id="city-form">
        <div class="row">
          <div class="col-7">
            <input
              type="search"
              placeholder="Enter a city..."
              autocomplete="off"
              class="form-control"
              id="city-input"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-primary"
              id=""
            />
          </div>
          <div class="col-2">
            <button className="location btn btn-primary">📍</button>
          </div>
        </div>
      </form>
    </div>
  );
}
