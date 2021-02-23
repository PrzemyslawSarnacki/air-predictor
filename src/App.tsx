import React, { useState, useEffect } from 'react';
import './App.css';
import { csv, DSVParsedArray } from 'd3';
import LineChart from './LineChart';

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

  const [historyData, setHistoryData] = useState<Array<[number]>>();
  const [labels,
    setLabels] = useState<Array<[string]>>();
  const [lastDate, setLastDate] = useState<Array<[string]>>();
  const [city, setCity] = useState<string>("Katowice");
  const [aqi, setAqi] = useState<number>(0);

  const getPredictionData = (city: string) => csv(`https://raw.githubusercontent.com/PrzemyslawSarnacki/AirQualityPrediction/master/data/predictions/history-${city}.csv`, row).then(
    (data) => {

      data.forEach((object) => xlabels.push(object[""]));
      data.forEach((object) => xdata.push(object["y_pred"]));
      setLastDate(data[0][""]);
      setLabels(xlabels);
      setHistoryData(xdata);
    }
  );

  const getHistoricData = (city: string) => csv(`https://raw.githubusercontent.com/PrzemyslawSarnacki/AirQualityPrediction/master/data/predictions/prediction-${city}.csv`, row).then(
    (data) => {
      data.forEach((object) => xlabels.push(object[""]));
      data.forEach((object) => xdata.push(object["aqi"]));
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
    <div className="App">
      <header className="App-header">
        <p>
          Choose your city
        </p>
      </header>
      <div className="App-chart">
        <h6>Choose a city:</h6>
        <select onChange={(option) => setCity(option.target.value)}>
          <option>Katowice</option>
          <option>Białystok</option>
          <option>Warszawa</option>
          <option>Poznań</option>
          <option>Kraków</option>
        </select>

        <LineChart labels={xlabels} xdata={xdata} />
        <p>{aqi}</p>
        {aqi > 60 ? 
        <p>sadFace</p>:
        <p>happyFace</p>
      }
      </div>
      <div className="App-empty">
      </div>
    </div>

  );
}

export default App;
