import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    setweatherData({
      coordinates: response.data.coord,
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city- make API call
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="searchform w-100"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
