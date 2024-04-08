import React from 'react';
import FormattedDate from './FormattedDate';
import "./Weather.css";


export default function WeatherInfo(props){
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
            <div className="clearfix">
              <span>
                <img
                  src={props.data.iconUrl}
                  alt="partly cloudy"
                  className="float-left"
                />
              </span>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
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