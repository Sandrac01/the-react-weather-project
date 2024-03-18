import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";



export default function weather() {
    const [weatherData, setWeatherData] = useState({ready: false });
    function handleResponse(response) {
        setTemperature(response.data.main.temp);
       
}
   
setWeatherData ({
    ready: true,
temperature: response.data.main.temp,
humidity: response.data.main.humidity,
date: new Date(response.data.dt * 1000),
description:  response.data.weather[0].description,
iconUrl: "https://ss1.gstatic.com/onebox/weather/64/partly_cloudy.png",
wind: response.data.wind.speed,
city: response.data.name
});


if (weatherData.ready) {
return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>{" "}
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li> <FormattedDate date={weatherData.date} /> </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">°c</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h%</li>
            </ul>
          </div>
        </div>
      </div>
    );
}  else {
const apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
    let apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
   
   return "loading...";
}



}