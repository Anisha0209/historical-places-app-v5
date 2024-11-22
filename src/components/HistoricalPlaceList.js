import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { markAsVisited, unmarkAsVisited } from "../redux/actions";
import { Link } from "react-router-dom";
import RandomSuggestion from "./RandomSuggestion";
import "./HistoricalPlaceList.css";

const HistoricalPlaceList = () => {
  const places = useSelector((state) => state.places); // All places from store
  const dispatch = useDispatch();
  const [randomPlace, setRandomPlace] = useState(null);
  const [showVisited, setShowVisited] = useState(false); // To toggle between all and visited places

  // Filter out visited places
  const visitedPlaces = places.filter((place) => place.visited);
  const displayedPlaces = showVisited ? visitedPlaces : places;

  // Random suggestion logic
  const getRandomSuggestion = () => {
    if (displayedPlaces.length > 0) {
      const randomIndex = Math.floor(Math.random() * displayedPlaces.length);
      setRandomPlace(displayedPlaces[randomIndex]);
    }
  };

  // Toggle the "Show Visited" button state
  const toggleShowVisited = () => {
    setShowVisited((prev) => !prev);
  };

  return (
    <div className="historical-places-container">
      <h2 className="place-title">List of Historical Places</h2>

      {/* Button to toggle between all and visited places */}
      <button className="toggle-visited-btn" onClick={toggleShowVisited}>
        {showVisited ? "Show All Places" : "Show Visited Places"}
      </button>

      <div className="places-list-container">
        <ul>
          {displayedPlaces.map((place) => (
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
