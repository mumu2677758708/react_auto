import { Component } from 'react'
import { connect } from 'react-redux';
import BannerOne from '../components/fund_sup_new/BannerOne'
import AddSectionA from '../components/fund_sup_new/AddSectionA'
import SectionA from '../components/fund_sup_new/SectionA'
import SectionBTabs from '../components/fund_sup_new/SectionBTabs'
import {
  MOCK_BANNER_LIST,
  ADD_SECA_CFG,
  RATE_NEED,
  FETCH_TYPE,
  TIME_NEED
} from '../common/config.js'
import '../styles/fund_sup_new/main.scss'
import { fetchGetGoal, fetchProTime } from '../actions/fund_sup_new'
class FundSupNew extends Component{
  componentDidMount() {
    RATE_NEED.forEach(element => {
        let { groupId, fetchType, rateId } = element;
        if(fetchType === FETCH_TYPE.GET_GOAL) this.props.fetchGetGoal(groupId, rateId);
    });
    TIME_NEED.forEach(element=>{
			let { categoryCode, categoryCodeId } = element;
			this.props.fetchProTime(categoryCode, categoryCodeId);
		})
  }
  render() {
    const { sectionRateTab1Arr,sectionRateTab2Arr,sectionRateTab3Arr, timeList1Arr, timeList2Arr, timeList3Arr } = this.props
    return (
          <div className="home__bg no__bottom__nav">
            <div className="home__banner">
              <BannerOne data={MOCK_BANNER_LIST}/>
            </div>
            <div className="home__addSectionA">
                <AddSectionA data={ADD_SECA_CFG} />
            </div>
            <div className="home__sectionA" id="home__sectionA">
                <SectionA/>
            </div>
            <div className="home__sectionB">
              <SectionBTabs date1={timeList1Arr}  date2={timeList2Arr}  date3={timeList3Arr} rateList1={sectionRateTab1Arr} rateList2={sectionRateTab2Arr} rateList3={sectionRateTab3Arr} />
            </div>
          </div>
        );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchGetGoal: (groupId, rateId) => {
    dispatch(fetchGetGoal(groupId, rateId))
  },
  fetchProTime: (categoryCode, categoryCodeId) => {
    dispatch(fetchProTime(categoryCode, categoryCodeId));
  }
});
export default connect(state => state, mapDispatchToProps)(FundSupNew);