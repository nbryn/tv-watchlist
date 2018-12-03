import axios from "axios";
import { GET_ERRORS, GET_MOVIES } from "./types";

export const newMovie = (movie, history) => async dispatch => {
  try {
    const res = axios.post("http://localhost:8080/api/movie", movie);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getMovies = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/movie/all");
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};
