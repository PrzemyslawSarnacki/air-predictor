import React, { useState, useEffect, ReactNode } from 'react';
import './css/tailwind.css';
import { csv } from 'd3';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import CategorizeForm from './components/CategorizeForm';

var S = require('string');

const row = (d: any) => {
  d.y_pred = +d.y_pred;
  d.y_pred_std = +d.y_pred_std;
  d.aqi = +d.aqi;
  d.errors = +d.errors;
  return d;
};


var xdata: Array<[number]> = [];
var xlabels: Array<[string]> = [];

const App: React.FC = () => {

  const [city, setCity] = useState<string>("Katowice");
  const [aqi, setAqi] = useState<number>(0);

  const getPredictionData = (city: string) => csv(`https://raw.githubusercontent.com/PrzemyslawSarnacki/AirQualityPrediction/master/data/predictions/history-${city}.csv`, row).then(
    (data) => {

      data.forEach((row) => xlabels.push(row[""]));
      data.forEach((row) => xdata.push(row["y_pred"]));
    }
  );

  const getHistoricData = (city: string) => csv(`https://raw.githubusercontent.com/PrzemyslawSarnacki/AirQualityPrediction/master/data/predictions/prediction-${city}.csv`, row).then(
    (data) => {
      data.forEach((row) => xlabels.push(row[""]));
      data.forEach((row) => xdata.push(row["aqi"]));
    }
  );

  const fetchCity = (city: string) => {
    const url = `https://api.openaq.org/v1/measurements?city=${city}&parameter=pm25`;
    fetch(url)
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            setAqi(data.results[0].value);
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }

  const stripAccents = (city: string) => {
    return S(city).latinise().s.toLowerCase()
  }


  useEffect(() => {
    xlabels = [];
    xdata = [];
    getHistoricData(stripAccents(city));
    getPredictionData(stripAccents(city));
    fetchCity(city);
  }, [city]);


  return (
    <body className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed" style={{ backgroundImage: `url(/header.png)` }}>
      <div className="h-full">
        <Navbar />
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <Header />
          <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2">
                Choose a city:
              </label>
              <select
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                onChange={(option) => setCity(option.target.value)}>
                <option>Katowice</option>
                <option>Białystok</option>
                <option>Warszawa</option>
                <option>Poznań</option>
                <option>Kraków</option>
              </select>

            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Sign Up
              </button>
            </div>
              <LineChart labels={xlabels} xdata={xdata} />
          </form>
          <CategorizeForm aqi={aqi} />
        </div>
        <Footer />
      </div>
    </body>
  );
}

export default App;
