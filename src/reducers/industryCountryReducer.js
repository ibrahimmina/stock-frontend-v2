import {
  GET_STOCKS_COUNTRY_INDUSTRY_DATA_SUCCESS,
  GET_STOCKS_COUNTRY_INDUSTRY_DATA_ERROR,
} from "../actions/actionTypes";

const initialState = {
  industriesCountries: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STOCKS_COUNTRY_INDUSTRY_DATA_SUCCESS:
      return {
        ...state,
        industriesCountries: action.payload,
      };
    case GET_STOCKS_COUNTRY_INDUSTRY_DATA_ERROR:
      return {
        ...state,
        industriesCountries: action.error,
      };
    default:
      return state;
  }
}
