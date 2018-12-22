import { SET_USER } from "../actions/ActionTypes";

const initialState = {
  user: {},
  validToken: false
};

const payload = payload => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        validToken: payload(action.payload),
        user: action.payload
      });
    default:
      return state;
  }
}
