import { combineReducers } from "redux";

import StagingProcessingReducers from "./stagingProcessingReducers";
import ErrorProcessingReducers from "./errorProcessingReducers";
import glaccountReducers from "./glaccountReducers";
import glcreationReducers from "./glcreationReducers";

//import glaccountcreationReducers from "./glaccountcreationReducers";

const rootReducer = combineReducers({
  StagingProcessingReducers,
  ErrorProcessingReducers,
  glaccountReducers,
  glcreationReducers,
  //glaccountcreationReducers
});

export default rootReducer;
