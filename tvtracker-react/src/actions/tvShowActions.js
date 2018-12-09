import axios from "axios";
import { GET_ERRORS, GET_TVSHOWS, GET_TVSHOW } from "./actionTypes";

export const newTvShow = (tvShow, history) => async dispatch => {
  try {
    const res = axios.post("http://localhost:8080/tvshow", tvShow);
    history.push("/tvShowMain");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getTvShows = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/tvshow/all");
  dispatch({
    type: GET_TVSHOWS,
    payload: res.data
  });
};

export const getTvShow = (id, history) => async dispatch => {
  const res = await axios.get(`http://localhost:8080/tvshow/${id}`);
  dispatch({
    type: GET_TVSHOW,
    payload: res.data
  });
};
