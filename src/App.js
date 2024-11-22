import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HistoricalPlaceList from "./components/HistoricalPlaceList";
import HistoricalPlaceDetails from "./components/HistoricalPlaceDetails";
import RandomSuggestion from "./components/RandomSuggestion";
import { useDispatch } from "react-redux";
import { fetchPlaces } from "./redux/actions";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HistoricalPlaceList />} />
        <Route path="/details/:id" element={<HistoricalPlaceDetails />} />
        <Route path="/random-suggestion" element={<RandomSuggestion />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
