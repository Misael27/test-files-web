import { SET_FILTER_NAME } from "../actionTypes";

const initialState = "";

const filterName = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_NAME: {
      return action.payload.filterName;
    }
    default: {
      return state;
    }
  }
};

export default filterName;

