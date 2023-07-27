import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from "react-router-dom"
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList"
export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movies' slice of state
          setMovies(response);
          console.log(response);
          console.log(movies);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Routes>
        <Route to="/" element={<MovieList movies={movies} />} />
      </Routes>
      
    </div>
  );
}
