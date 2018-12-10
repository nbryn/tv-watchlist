import axios from "axios";
import { GET_ERRORS, GET_SERIES, GET_SERIE } from "./actionTypes";

export const newSerie = (serie, history) => async dispatch => {
  try {
    const res = axios.post("http://localhost:8080/series", serie);
    history.push("/seriesMain");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getSeries = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/series/all");
  dispatch({
    type: GET_SERIES,
    payload: res.data
  });
};

export const getSerie = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/series/${id}`);
    dispatch({
      type: GET_SERIE,
      payload: res.data
    });
  } catch (error) {
    history.push("/seriesMain");
  }
};
