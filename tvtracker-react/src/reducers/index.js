import { combineReducers } from "redux";
import ErrorReducer from "./ErrorReducer";
import MovieReducer from "./MovieReducer";
import SeriesReducer from "./SeriesReducer";
import TvShowReducer from "./TvShowReducer";

export default combineReducers({
  errors: ErrorReducer,
  movie: MovieReducer,
  series: SeriesReducer,
  tvShow: TvShowReducer
});
