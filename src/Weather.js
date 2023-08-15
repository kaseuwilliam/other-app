import React, { useState, useEffect } from "react";
import axios from "axios";
let city = "minneapolis";
const url = `http://api.weatherapi.com/v1/forecast.json?key=b55a046824644c14b33180550230708&q=${city}`;
const api = axios.create({
  baseURL: url,
});

const Hourly1 = () => {
  let [temps, setTemps] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    api.get().then((response) => {


      let temperatures = response.data.forecast.forecastday[0].hour.map(
        (hour) => hour.temp_f
      );
      setTemps(temperatures);

    });
  }

  return (
    <>
      <button onClick={getData}>get</button>
      <h1>Hourly forecast</h1>
      {temps.map((temp) => {
        console.log(temp);
        return <h3>{temp}</h3>;
      })}
    </>
  );
};

export default Hourly1;