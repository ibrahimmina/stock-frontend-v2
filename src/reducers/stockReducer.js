import {
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_ERROR,
} from "../actions/actionTypes";

const initialState = {
  countries: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_ALL_COUNTRIES_ERROR:
      return {
        ...state,
        countries: action.error,
      };

    default:
      return state;
  }
}
