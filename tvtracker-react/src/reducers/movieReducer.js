import { GET_MOVIES, GET_MOVIE } from "../actions/actionTypes";

const initialState = {
  movies: [],
  movie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload
      });
    case GET_MOVIE:
      return Object.assign({}, state, {
        movie: action.payload
      });
    default:
      return state;
  }
}
