import { combineEpics } from "redux-observable";
import {
  FETCH_PLACES,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
} from "./actions";
import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, catchError, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

const fetchPlacesEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_PLACES),
    mergeMap(() =>
      ajax
        .getJSON("https://mocki.io/v1/1e1d7977-fe7e-41ee-98f0-78f402ed12a1")
        .pipe(
          map((response) => ({
            type: FETCH_PLACES_SUCCESS,
            payload: response.historicalPlaces,
          })),
          catchError((error) => of({ type: FETCH_PLACES_FAILURE, error }))
        )
    )
  );

const rootEpic = combineEpics(fetchPlacesEpic);

export default rootEpic;
