import { GET_TVSHOWS } from "../actions/types";

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
    default:
      return state;
  }
}
