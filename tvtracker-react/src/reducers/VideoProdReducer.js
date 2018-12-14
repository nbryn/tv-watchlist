import {
  GET_ALL,
  GET_VIDEOPROD,
  DELETE_VIDEOPROD
} from "../actions/ActionTypes";

const initialState = {
  videoProds: [],
  videoProd: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return Object.assign({}, state, {
        videoProds: action.payload
      });
    case GET_VIDEOPROD:
      return Object.assign({}, state, {
        videoProd: action.payload
      });
    case DELETE_VIDEOPROD:
      return Object.assign({}, state, {
        videoProds: state.videoProds.filter(
          videoProd => videoProd.title !== action.payload
        )
      });
    default:
      return state;
  }
}
