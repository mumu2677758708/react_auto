export const actionTypes = {
  FAILURE: "FAILURE",
  FETCH_GET_GOAL: "FETCH_GET_GOAL",
  FETCH_GET_GOAL_SUC: "FETCH_GET_GOAL_SUC",
  FETCH_PRO_TIME: "FETCH_PRO_TIME"
};
export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}
export function fetchGetGoalSuc(loc, index, rate) {
  return {
    type: actionTypes.FETCH_GET_GOAL_SUC,
    loc,
    index,
    rate,
  }
}
export function fetchGetGoal(groupId, rateId) {
  return {
    type: actionTypes.FETCH_GET_GOAL,
    groupId,
    rateId,
  }
}
export function fetchProTime(categoryCode, categoryCodeId) {
  return {
    type: actionTypes.FETCH_PRO_TIME,
    categoryCode,
    categoryCodeId
  }
}