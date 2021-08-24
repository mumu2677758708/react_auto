import axios from "axios";

const clientType = '4'
const apiHostYing = 'https://yingapi.yirendai.com'
const APIMubiaoyingInfo = apiHostYing + "/fundClient/fundTarget/category";
const APIFetchGetGoal = apiHostYing + "/fundClient/group/getGoal";
function fetchProTimeAPI({ categoryCode }){
    return axios({
        url: APIMubiaoyingInfo,
        method: 'post',
        params: {
           clientType,
           categoryCode:categoryCode
        }
    })
    .then(({data}) => ({response: data}))
    .catch(error => ({error}))
}

/*
@Desc: 根据组合id获取到近5年的收益率
*/
function fetchGetGoalAPI({ groupId }){
    return axios({
        url: APIFetchGetGoal,
        method: "post",
        params: {
            clientType,
            groupId,
        }
    })
    .then(({data}) => ({response: data}))
    .catch(error => ({error}))
}

export {
  fetchProTimeAPI,
  fetchGetGoalAPI
}