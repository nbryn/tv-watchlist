import { GET_SERIES } from "../actions/types";

const initialState = {
  series: [],
  serie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SERIES:
      return Object.assign({}, state, {
        series: action.payload
      });
    default:
      return state;
  }
}
