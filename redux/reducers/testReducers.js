import {
  ALL_SUCCESS,
  ALL_FAIL,
  CLEAR_ERRORS,
} from "../constants/testConstants";

export const testReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case ALL_SUCCESS:
      return { data: action.payload };
    case ALL_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
