import { combineReducers } from "redux";
import authReducer from "./authReducer";
import movieReducer from "./movieReducer";
import genreReducer from "./genreReducer";
import stockReducer from "./stockReducer";
import industryReducer from "./industryReducer";

export default combineReducers({
  auth: authReducer,
  movie: movieReducer,
  genre: genreReducer,
  stock: stockReducer,
  industry: industryReducer,
});
