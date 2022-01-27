import { SET_FILTER_NAME } from "./actionTypes";

export const setFilterName = filterName => ({
  type: SET_FILTER_NAME,
  payload: {
    filterName
  }
});