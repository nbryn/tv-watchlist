import axios from "axios";
import { GET_MOVIES } from "./ActionTypes";

export const getMovies = () => async dispatch => {
  const res = await axios.get("https://tv-watchlist.herokuapp.com/video/movie");
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};
