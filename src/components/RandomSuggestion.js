import React from "react";
import { useSelector } from "react-redux";
import "./RandomSuggestion.css";
import { Link } from "react-router-dom";

const RandomSuggestion = ({ currentPlaceId }) => {
  const places = useSelector((state) => state.places);

  const randomPlace = places[Math.floor(Math.random() * places.length)];

  if (!randomPlace) {
    return <div>No suggestions available.</div>;
  }

  return (
    <div className="random-suggestion">
      <h2>Random Suggestion</h2>
      <Link
        to={`/details/${randomPlace.id}`}
        className="random-suggestion-link"
      >
        <h3>{randomPlace.name}</h3>
        <p>{randomPlace.description}</p>
        <img src={randomPlace.image} alt={randomPlace.name} width="550" />
      </Link>
    </div>
  );
};

export default RandomSuggestion;
