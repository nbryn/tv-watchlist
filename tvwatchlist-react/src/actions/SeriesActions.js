import axios from "axios";
import { GET_SERIES } from "./ActionTypes";

export const getSeries = () => async dispatch => {
  const res = await axios.get(
    "https://tv-watchlist.herokuapp.com/video/series"
  );
  dispatch({
    type: GET_SERIES,
    payload: res.data
  });
};
