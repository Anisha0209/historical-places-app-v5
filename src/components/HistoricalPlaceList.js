import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { markAsVisited, unmarkAsVisited } from "../redux/actions";
import { Link } from "react-router-dom";
import RandomSuggestion from "./RandomSuggestion";
import "./HistoricalPlaceList.css";

const HistoricalPlaceList = () => {
  const places = useSelector((state) => state.places);
  const dispatch = useDispatch();
  const [randomPlace, setRandomPlace] = useState(null);

  const getRandomSuggestion = () => {
    if (places.length > 0) {
      const randomIndex = Math.floor(Math.random() * places.length);
      setRandomPlace(places[randomIndex]);
    }
  };

  return (
    <div className="historical-places-container">
      <h2 className="place-title">List of Historical Places</h2>
      <div className="places-list-container">
        <ul>
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <img src={place.image} alt={place.name} width="250" />
              <div className="place-info">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                <Link to={`/details/${place.id}`}>View Details</Link>
                <div className="button-group">
                  <button onClick={() => dispatch(markAsVisited(place.id))}>
                    Mark as Visited
                  </button>
                  <button onClick={() => dispatch(unmarkAsVisited(place.id))}>
                    Unmark as Visited
                  </button>
                  {place.visited && (
                    <span className="visited"> - Visited!</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="random-suggestion-container">
        <button onClick={getRandomSuggestion}>Get a Random Suggestion</button>
        {randomPlace && <RandomSuggestion currentPlaceId={randomPlace.id} />}
      </div>
    </div>
  );
};

export default HistoricalPlaceList;
