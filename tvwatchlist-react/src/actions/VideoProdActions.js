import axios from "axios";
import {
  GET_ERRORS,
  GET_ALL,
  DELETE_VIDEOPROD,
  GET_VIDEOPROD
} from "./ActionTypes";

export const newVideoProd = (videoProd, history) => async dispatch => {
  try {
    const res = await axios.post(
      "https://tv-watchlist.herokuapp.com/video",
      videoProd
    );
    history.push("/main");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const deleteVideoProd = title => async dispatch => {
  await axios.delete(`https://tv-watchlist.herokuapp.com/video/${title}`);
  dispatch({
    type: DELETE_VIDEOPROD,
    payload: title
  });
};

export const getVideoProd = (id, history) => async dispatch => {
  try {
    const res = await axios.get(
      `https://tv-watchlist.herokuapp.com/video/${id}`
    );
    dispatch({
      type: GET_VIDEOPROD,
      payload: res.data
    });
  } catch (error) {
    history.push("/main");
  }
};

export const getAll = () => async dispatch => {
  const res = await axios.get("https://tv-watchlist.herokuapp.com/video/all");
  dispatch({
    type: GET_ALL,
    payload: res.data
  });
};
