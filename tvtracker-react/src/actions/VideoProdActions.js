import axios from "axios";
import { GET_ERRORS, GET_ALL, GET_VIDEOPROD } from "./ActionTypes";

export const newVideoProd = (videoProd, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/video", videoProd);
    history.push("/main");
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

export const getVideoProd = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/video/${id}`);
    dispatch({
      type: GET_VIDEOPROD,
      payload: res.data
    });
  } catch (error) {
    history.push("/main");
  }
};

export const getAll = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/video/all");
  dispatch({
    type: GET_ALL,
    payload: res.data
  });
};