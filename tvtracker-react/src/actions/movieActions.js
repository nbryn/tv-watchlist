import axios from "axios";
import { GET_ERRORS, GET_MOVIES, GET_MOVIE } from "./actionTypes";

export const newMovie = (movie, history) => async dispatch => {
  try {
    axios.post("http://localhost:8080/movie", movie);
    history.push("/movieMain");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getMovies = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/movie/all");
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};

export const getMovie = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/movie/${id}`);
    dispatch({
      type: GET_MOVIE,
      payload: res.data
    });
  } catch (error) {
    history.push("/movieMain");
  }
};
