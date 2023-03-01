import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/ChatGPTStyles.css';

const StarWarsApi = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState('');
  const [openingCrawl, setOpeningCrawl] = useState('');

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => {
        const filmList = response.data.results;
        setFilms(filmList);
      })
      .catch(error => console.error(error))
  }, []);

  const handleFilmChange = (e) => {
    const film = e.target.value;
    setSelectedFilm(film);

    axios.get(`https://swapi.dev/api/films/${film}/`)
      .then(response => {
        setOpeningCrawl(response.data.opening_crawl);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div className='selector'>
        <select className='select-bar' value={selectedFilm} onChange={handleFilmChange}>
          <option value="">Select a film</option>
          {films.map(film => (
            <option key={film.episode_id} value={film.episode_id}>{film.title}</option>
          ))}
        </select>
      </div>
      <div className='opening-crawl'>
        <p>{openingCrawl}</p>
      </div>
    </div>
  );
};

export default StarWarsApi;