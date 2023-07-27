import React from 'react';
import { useNavigate } from "react-router-dom"
export default function SavedList(props) {
const navigate = useNavigate();
const routeHome = () => {
  console.log("Going Home...")
  navigate("/")
}
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <button onClick={routeHome} className="home-button">Home</button>
    </div>
  );
}
