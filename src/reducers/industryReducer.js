import {
  GET_ALL_INDUSTRIES_DATA_SUCCESS,
  GET_ALL_INDUSTRIES_DATA_ERROR,
} from "../actions/actionTypes";

const initialState = {
  industries: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_INDUSTRIES_DATA_SUCCESS:
      return {
        ...state,
        industries: action.payload,
      };
    case GET_ALL_INDUSTRIES_DATA_ERROR:
      return {
        ...state,
        industries: action.error,
      };
    default:
      return state;
  }
}
