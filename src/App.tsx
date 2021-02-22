import React, { useState, useEffect } from 'react';
import './App.css';
import { csv, DSVParsedArray } from 'd3';
import LineChart from './LineChart';

const row = (d: any) => {
  d.y_pred = +d.y_pred;
  d.y_pred_std = +d.y_pred_std;
  d.errors = +d.errors;
  return d;
};


var xdata: Array<[number]> = [];
var xlabels: Array<[string]> = [];

interface IUser {
  historyData: Array<[string]>;
}

const App: React.FC = () => {
  
  const [historyData, setHistoryData] = useState<Array<[number]>>();
  const [labels, setLabels] = useState<Array<[string]>>();

  useEffect(() => {
    csv('https://raw.githubusercontent.com/PrzemyslawSarnacki/AirQualityPrediction/master/data/predictions/history-bialystok.csv', row).then(
      (data) => {
        data.forEach((object) => xlabels.push(object[""]))
        data.forEach((object) => xdata.push(object["y_pred"]))
        // data.append(row)
        console.log(labels)
        
        setLabels(xlabels);
        setHistoryData(xdata);
        console.log(xdata)

      }
    )
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <LineChart labels={xlabels} xdata={xdata} />
        </p>
      </header>
    </div>
  );
}

export default App;
