import React, { useState, useEffect, ReactNode } from 'react';
import './css/tailwind.css';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import CategorizeForm from './components/CategorizeForm';
import ChoiceForm from './components/ChoiceForm';

var S = require('string');


const App: React.FC = () => {
  
  const [city, setCity] = useState<string>("Katowice");
  
  const stripAccents = (city: string) => {
    return S(city).latinise().s.toLowerCase()
  }

  return (
    <body className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed" style={{ backgroundImage: `url(header.png)` }}>
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
            <LineChart city={stripAccents(city)} />
          </ChoiceForm>
          <CategorizeForm city={city} />
        </div>
        <Footer />
        </div>
    </body>
  );
}

export default App;
