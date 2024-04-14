import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response){
    console.log(response.data);

}
    console.log(props);


  let apiKey = "63214c4281922e3bb72fdf12dada7734";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> Thu</div>
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
              className="float-left"
            />
          </div>
          <div className="WeatherForecast-temps">
            {" "}
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
