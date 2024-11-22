//using fetch

// import { combineEpics } from "redux-observable";
// import {
//   FETCH_PLACES,
//   FETCH_PLACES_SUCCESS,
//   FETCH_PLACES_FAILURE,
// } from "./actions";
// import { ofType } from "redux-observable";
// import { from, of } from "rxjs"; // Import 'of' here
// import { map, catchError, mergeMap } from "rxjs/operators";

// const fetchPlacesEpic = (action$) =>
//   action$.pipe(
//     ofType(FETCH_PLACES),
//     mergeMap(() =>
//       from(
//         fetch("https://mocki.io/v1/91bf03cb-c45a-4441-b73d-54110edc2482")
//           .then((response) => response.json()) // Parsing the JSON response
//           .then((data) => ({
//             type: FETCH_PLACES_SUCCESS,
//             payload: data.historicalPlaces,
//           }))
//       ).pipe(
//         catchError((error) => of({ type: FETCH_PLACES_FAILURE, error })) // 'of' is now imported
//       )
//     )
//   );

// const rootEpic = combineEpics(fetchPlacesEpic);

// export default rootEpic;

//using axios

import { combineEpics } from "redux-observable";
import {
  FETCH_PLACES,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
} from "./actions";
import { ofType } from "redux-observable";
import axios from "axios"; // Importing axios
import { from, of } from "rxjs"; // Import 'from' and 'of' from 'rxjs'
import { map, catchError, mergeMap } from "rxjs/operators";

const fetchPlacesEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_PLACES),
    mergeMap(() =>
      from(
        axios
          .get("https://mocki.io/v1/91bf03cb-c45a-4441-b73d-54110edc2482")
          .then((response) => ({
            type: FETCH_PLACES_SUCCESS,
            payload: response.data.historicalPlaces, // Axios automatically parses the response
          }))
      ).pipe(catchError((error) => of({ type: FETCH_PLACES_FAILURE, error })))
    )
  );

const rootEpic = combineEpics(fetchPlacesEpic);

export default rootEpic;
