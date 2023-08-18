import { combineReducers } from "redux";

import counter from "./counter";
import infoApp from './infoApp'

const allReducers = combineReducers({
  infoApp: infoApp,
  counter: counter,

  // add more reducers here
});
export default allReducers