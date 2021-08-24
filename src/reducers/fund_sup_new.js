import {
    actionTypes
} from "../actions/fund_sup_new";

export const initialState = {
    error: null,
    needRefresh: false,
    sectionARateArr: [],
    sectionBRateArr: [],
    sectionERateArr: [],
    bannerList: [],
    trendData: [],
    trendEData: [],
    fundDiscList: [],
    serverTime: {},
    sectionRateTab1Arr: [],
    sectionRateTab2Arr: [],
    sectionRateTab3Arr: [],
    timeList1Arr: [],
    timeList2Arr: [],
    timeList3Arr: [],
    cardBase: [],
    fastCarInfoVal: null,
    targetProductList: [],
    fundGroupHoldList: [],
    paomadengIsShow: '0'

};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FAILURE:
            return {
                ...state,
                ...{
                    error: action.error
                }
            }
        case actionTypes.REFRESH:
            return {
                ...state,
                ...{
                    needRefresh: action.bool
                }
            }
        case actionTypes.SET_VALUE:
            return {
                ...state,
                ...{
                    [action.name]: action.value
                }
            }
        case actionTypes.FETCH_GET_GOAL_SUC: {
            let {
                loc,
                index,
                rate
            } = action;
            let temp = JSON.parse(JSON.stringify(state[loc]));
            temp[index] = rate;
            console.log({
                ...state,
                ...{
                    [loc]: temp
                }
            })
            console.log('reducer-------------')
            return {
                ...state,
                ...{
                    [loc]: temp
                }
            }
        }
        case actionTypes.FETCH_BANNER_LIST_SUC:
            return {
                ...state,
                ...{
                    bannerList: action.bannerList
                }
            }
        case actionTypes.FETCH_TARGETPRODUCT_LIST_SUC:
            return {
                ...state,
                ...{
                    targetProductList: action.targetProductList
                }
            }
        case actionTypes.FETCH_FUNDGROUPHOLD_LIST_SUC:
            return {
                ...state,
                ...{
                    fundGroupHoldList: action.fundGroupHoldList
                }
            }

        case actionTypes.FETCH_TREND_DATA_SUC: {
            let {
                trendList,
                indexT,
                locName
            } = action;
            let temp = JSON.parse(JSON.stringify(state[locName]));
            temp[indexT] = trendList;

            return {
                ...state,
                ...{
                    [locName]: temp
                },
            }
        }
        default:
            return state;
    }
}

export default reducer;