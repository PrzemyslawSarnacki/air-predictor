import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { csv, DSVParsedArray } from 'd3';
import LineChart from './LineChart';


const row = (d: any) => {
  d.y_pred = +d.y_pred;
  d.y_pred_std = +d.y_pred_std;
  d.errors = +d.errors;
  return d;
};

var hehe: DSVParsedArray<any>;

const App = () => {
  const [historyData , setHistoryData] = useState([]);

  useEffect(() => {
    csv('https://raw.githubusercontent.com/PrzemyslawSarnacki/AirQualityPrediction/master/data/predictions/history-bialystok.csv', row).then(
    (data) => {
      hehe = data;
      // data.append(row)
      console.log(hehe)
    }
    )
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.

        </p>
        <LineChart data={hehe}/>
      </header>
    </div>
  );
}

export default App;
