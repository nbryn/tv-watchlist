import { GET_MOVIES } from "../actions/ActionTypes";

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
    default:
      return state;
  }
}
