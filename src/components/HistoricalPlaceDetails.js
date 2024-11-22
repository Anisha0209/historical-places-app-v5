import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import RandomSuggestion from "./RandomSuggestion";
import "./HistoricalPlaceDetails.css";
import Breadcrumbs from "./Breadcrumbs";

const HistoricalPlaceDetails = () => {
  const { id } = useParams();
  const place = useSelector((state) =>
    state.places.find((place) => place.id === parseInt(id))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!place) {
    return <div className="error-message">Place not found!</div>;
  }

  return (
    <div>
      <Breadcrumbs currentPlaceName={place.name} />
      <div className="details-container">
        <div className="place-header">
          <h2 className="place-title">{place.name}</h2>
          <Link to="/" className="back-link">
            Back to List
          </Link>
        </div>

        <img src={place.image} alt={place.name} className="place-image" />

        <div className="place-info-details">
          <p>
            <span className="place-details">Location: </span>
            {place.location}
          </p>
          <p>
            <span className="place-details">Best Time to Visit: </span>
            {place.time}
          </p>
          <p>
            <span className="place-details">Suggested Duration: </span>
            {place.duration}
          </p>
          <p>{place.description}</p>
          <p>
            <b>Historical Significance:</b> {place.significant}
          </p>
        </div>
      </div>

      <div className="random-suggestion-container">
        <RandomSuggestion currentPlaceId={place.id} />
      </div>
    </div>
  );
};

export default HistoricalPlaceDetails;
