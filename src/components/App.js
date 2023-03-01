import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Navbar from "./Navbar";
import HomePage from './HomePage';
import ChatGPT from './ChatGpt';
import DogApi from './DogApi';
import StarWarsApi from './StarwarsAPI';


function App() {

  return (
    <div>
      <h1>API Glory Hole</h1>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/DogApi" element={<DogApi />} />
            <Route path="/ChatGpt" element={<ChatGPT />} />
            <Route path="/StarwarsAPI" element={<StarWarsApi />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
export default App;