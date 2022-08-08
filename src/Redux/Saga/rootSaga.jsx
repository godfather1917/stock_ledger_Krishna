import { all, fork } from "redux-saga/effects";
import StagingProcessing from "./stagingProcessingSaga";
import {ErrorProcessing,updateErrorProcessing,getClassData, getLocationData} from "./errorProcessingSaga";
import {GlAccount,updateGlAccount,GLcurrency} from "./glaccountSaga";
import {GlAccountcreation} from "./glaccountSagacreation";
//import {GlAccountcreation,updateGlAccountcreation} from "./glaccountcreationSaga";

export function* rootSaga() {
  yield all([
    fork(StagingProcessing),
    fork(ErrorProcessing),
    fork(updateErrorProcessing),
    fork(getClassData),
    fork(getLocationData),
    fork(updateGlAccount),
    fork(GlAccount),
    fork(GLcurrency),
    fork(GlAccountcreation),

   // fork(GlAccountcreation),
    //fork(updateGlAccountcreation)
  ]);
}
