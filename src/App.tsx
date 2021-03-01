import React, { useState, useEffect, ReactNode } from 'react';
import './css/tailwind.css';
import { csv } from 'd3';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import CategorizeForm from './components/CategorizeForm';
import ChoiceForm from './components/ChoiceForm';

var S = require('string');
var xdata: Array<[number]> = [];
var xlabels: Array<[string]> = [];


const App: React.FC = () => {
  
  const [city, setCity] = useState<string>("Katowice");
  
  
  const row = (d: any) => {
    d.y_pred = +d.y_pred;
    d.y_pred_std = +d.y_pred_std;
    d.aqi = +d.aqi;
    d.errors = +d.errors;
    return d;
  };
  
  

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



  const stripAccents = (city: string) => {
    return S(city).latinise().s.toLowerCase()
  }


  useEffect(() => {
    xlabels = [];
    xdata = [];
    getHistoricData(stripAccents(city));
    getPredictionData(stripAccents(city));
  }, [city]);


  return (
    <body className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed" style={{ backgroundImage: `url(/header.png)` }}>
      <div className="h-full">
        <Navbar />
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <Header />
          <ChoiceForm>
            <select
              className="mb-5 shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              onChange={(option) => setCity(option.target.value)}>
              <option>Katowice</option>
              <option>Białystok</option>
              <option>Warszawa</option>
              <option>Poznań</option>
              <option>Kraków</option>
            </select>
            <LineChart labels={xlabels} xdata={xdata} />
          </ChoiceForm>
          <CategorizeForm city={city} />
        </div>
        <Footer />
        </div>
    </body>
  );
}

export default App;
