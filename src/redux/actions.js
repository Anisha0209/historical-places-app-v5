export const FETCH_PLACES = "FETCH_PLACES";
export const FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS";
export const FETCH_PLACES_FAILURE = "FETCH_PLACES_FAILURE";

export const fetchPlaces = () => ({
  type: FETCH_PLACES,
});

export const fetchPlacesSuccess = (places) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: places,
});

export const fetchPlacesFailure = (error) => ({
  type: FETCH_PLACES_FAILURE,
  payload: error,
});

export const MARK_AS_VISITED = "MARK_AS_VISITED";
export const UNMARK_AS_VISITED = "UNMARK_AS_VISITED";

export const markAsVisited = (id) => ({
  type: MARK_AS_VISITED,
  payload: id,
});

export const unmarkAsVisited = (id) => ({
  type: UNMARK_AS_VISITED,
  payload: id,
});
