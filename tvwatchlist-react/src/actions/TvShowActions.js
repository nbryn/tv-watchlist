import axios from "axios";
import { GET_TVSHOWS } from "./ActionTypes";

export const getTvShows = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/video/tvShow");
  dispatch({
    type: GET_TVSHOWS,
    payload: res.data
  });
};
