import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      {" "}
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix d-flex align-items-center">
            <div>
              <img
                src={props.data.iconUrl}
                alt="partly cloudy"
                className="float-left"
              />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 72% </li>
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind:{Math.round(props.data.wind)} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
