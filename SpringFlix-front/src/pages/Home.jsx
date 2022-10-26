import React, { useEffect, useState } from 'react';

const apiurl = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {

  const [topMovies, setTopMovies] = useState([]);

  const getTopMovies = async (url) => {
    // alter axios
    const response = await fetch(url);
    const data = await response.json();

    setTopMovies(data.results);
  }

  useEffect(() => {
    const topMoviesUrl = `${apiurl}top_rated?${apikey}`;
    getTopMovies(topMoviesUrl);
  }, []);
  
  return (
    <div>
      {topMovies && topMovies.map((movie) => ( <p>{movie.title}</p> ))}
    </div>
  );
};

export default Home;