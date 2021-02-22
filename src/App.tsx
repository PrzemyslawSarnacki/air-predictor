import React, { useState, useEffect } from 'react';
import './App.css';
import { csv, DSVParsedArray } from 'd3';
import LineChart from './LineChart';

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
  const [city, setCity] = useState<string>("katowice");

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

  useEffect(() => {
    getHistoricData("katowice");
    getPredictionData("katowice");
  }, []);

  useEffect(() => {
    xlabels = [];
    xdata = [];
    getHistoricData(city);
    getPredictionData(city);
  }, [city]);



  return (
    <div className="App">
      <header className="App-header">
        <p>
          Choose your city
        </p>
      </header>
      <div className="App-chart">

        <button onClick={() => setCity("bialystok")}>bialystok</button>
        <button onClick={() => setCity("katowice")}>katowice</button>
        <button onClick={() => setCity("warszawa")}>warszawa</button>
        <button onClick={() => setCity("poznan")}>poznan</button>
        <button onClick={() => setCity("krakow")}>krakow</button>
          <LineChart labels={xlabels} xdata={xdata} />
      </div>
      <div className="App-empty">
      </div>
    </div>

  );
}

export default App;
