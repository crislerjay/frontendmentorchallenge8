
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import DataFetching from './DataFetching';
import FetchCountries from './FetchCountries';
import Header from './Header';
import SingleCountry from './SingleCountry';

function App() {
 

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FetchCountries />} />
        <Route path="/name/:id" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
