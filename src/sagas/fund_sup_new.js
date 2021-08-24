import { all, call, put,takeEvery } from "redux-saga/effects";

import { getRateDataByRateId, getTIMEDataCategoryCodeId } from '../common/config'
import {  fetchGetGoalAPI, fetchProTimeAPI } from '../api/fund_sup_new'
import { failure, actionTypes, fetchGetGoalSuc } from '../actions/fund_sup_new'

function *templatePattern(api, args){
    try {
        const { error, response } = yield call(api, args);
        //* Error Deal
        if(error) {
            yield call(dealFailureSagas, error);
            return {};
        }
        return response;
    } catch (error) {
        if(error) yield call(dealFailureSagas, error);
        return {};
    }
}
function* dealFailureSagas(error) {
  yield put(failure(error));
  // console.warn(error);
}

function *fetchProTimeSagas(action) {
  let {
    categoryCode,
    categoryCodeId
  } = action;
  let timeObj = getTIMEDataCategoryCodeId(categoryCodeId);
  if (!timeObj) return; //TODO 关于一致性检测的过滤
  const {
    result = "", data = "", msg = "", errorCode = ""
  } = yield call(templatePattern, fetchProTimeAPI, {
    categoryCode
  });
  if (result !== "success") return yield call(dealFailureSagas, `fetchProTimeAPI error: ${msg} errorCode: ${errorCode}`);

  //let { loc, index, rateType } = rateObj;
  //let rate = data && data[rateType] || 0;
  let {
    loc,
    index
  } = timeObj
  let time = (data['targets'] && data['targets'][0]) || {};
  yield put(fetchGetGoalSuc(loc, index, time));
  // yield put(updatePropsVer());
}
function* fetchGetGoalSagas(action) {
  let {
    groupId,
    rateId
  } = action;
  let rateObj = getRateDataByRateId(rateId);
  if (!rateObj) return; //TODO 关于一致性检测的过滤
  const {
    result = "", data = "", msg = "", errorCode = ""
  } = yield call(templatePattern, fetchGetGoalAPI, {
    groupId
  });
  if (result !== "success") return yield call(dealFailureSagas, `fetchGetGoalAPI error: ${msg} errorCode: ${errorCode}`);

  let {
    loc,
    index,
    rateType
  } = rateObj;
  let rate = (data && data[rateType]) || 0;
  yield put(fetchGetGoalSuc(loc, index, rate));
  // yield put(updatePropsVer());
}
function* rootSaga() {
  yield all([
    takeEvery(actionTypes.FETCH_GET_GOAL, fetchGetGoalSagas),
    takeEvery(actionTypes.FETCH_PRO_TIME, fetchProTimeSagas)
  ])
}

export default rootSaga;