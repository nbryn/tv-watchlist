import { GET_TVSHOWS, GET_TVSHOW } from "../actions/actionTypes";

const initialState = {
  tvShows: [],
  tvShow: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TVSHOWS:
      return Object.assign({}, state, {
        tvShows: action.payload
      });
    case GET_TVSHOW:
      return Object.assign({}, state, {
        tvShow: action.payload
      });
    default:
      return state;
  }
}
