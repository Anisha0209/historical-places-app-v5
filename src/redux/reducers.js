import {
  FETCH_PLACES_SUCCESS,
  MARK_AS_VISITED,
  UNMARK_AS_VISITED,
} from "./actions";

const initialState = {
  places: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        places: action.payload.map((place) => ({ ...place, visited: false })),
      };
    case MARK_AS_VISITED:
      return {
        ...state,
        places: state.places.map((place) =>
          place.id === action.payload ? { ...place, visited: true } : place
        ),
      };
    case UNMARK_AS_VISITED:
      return {
        ...state,
        places: state.places.map((place) =>
          place.id === action.payload ? { ...place, visited: false } : place
        ),
      };
    default:
      return state;
  }
};

export default placesReducer;
