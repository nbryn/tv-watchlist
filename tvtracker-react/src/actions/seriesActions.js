import axios from "axios";
import { GET_SERIES } from "./ActionTypes";

export const getSeries = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/video/series");
  dispatch({
    type: GET_SERIES,
    payload: res.data
  });
};
