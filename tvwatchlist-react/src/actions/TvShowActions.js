import axios from "axios";
import { GET_TVSHOWS } from "./ActionTypes";

export const getTvShows = () => async dispatch => {
  const res = await axios.get(
    "https://tv-watchlist.herokuapp.com/video/tvShow"
  );
  dispatch({
    type: GET_TVSHOWS,
    payload: res.data
  });
};
