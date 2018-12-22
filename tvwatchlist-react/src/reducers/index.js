import { combineReducers } from "redux";
import ErrorReducer from "./ErrorReducer";
import MovieReducer from "./MovieReducer";
import SeriesReducer from "./SeriesReducer";
import TvShowReducer from "./TvShowReducer";
import VideoProdReducer from "./VideoProdReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  errors: ErrorReducer,
  videoProd: VideoProdReducer,
  movie: MovieReducer,
  series: SeriesReducer,
  tvShow: TvShowReducer
});
