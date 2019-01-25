import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import movieReducer from "./movieReducer";
import seriesReducer from "./seriesReducer";
import tvShowReducer from "./tvShowReducer";
import videoProdReducer from "./videoProdReducer";
import userReducer from "./userReducer";

export default combineReducers({
  errors: errorReducer,
  videoProd: videoProdReducer,
  movie: movieReducer,
  series: seriesReducer,
  tvShow: tvShowReducer,
  user: userReducer
});
