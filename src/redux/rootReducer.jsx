import { combineReducers } from "redux";
import postReducer from "./posts-slice";

const rootReducer = combineReducers({
  postsInfo: postReducer,
});

export default rootReducer;
