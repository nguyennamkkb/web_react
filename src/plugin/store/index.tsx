import { combineReducers } from "redux";

import counterReducer from "../reducers/counterReducer";

const allReducers = combineReducers({
  counterReducer,
  // add more reducers here
});
export default allReducers