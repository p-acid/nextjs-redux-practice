import axios from "axios";

import {
  ALL_SUCCESS,
  ALL_FAIL,
  CLEAR_ERRORS,
} from "../constants/testConstants";

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/test.json");

    dispatch({
      type: ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_FAIL,
      payload: error.response.data.message,
    });
  }
};
