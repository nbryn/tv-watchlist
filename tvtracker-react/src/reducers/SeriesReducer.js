import { GET_SERIES, GET_SERIE } from "../actions/actionTypes";

const initialState = {
  series: [],
  serie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SERIES:
      return Object.assign({}, state, {
        movies: action.payload
      });
    case GET_SERIE:
      return Object.assign({}, state, {
        project: action.payload
      });
    default:
      return state;
  }
}
