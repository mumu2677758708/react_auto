import { Component } from 'react'
import BannerOne from '../components/fund_sup_new/BannerOne'
import AddSectionA from '../components/fund_sup_new/AddSectionA'
import SectionA from '../components/fund_sup_new/SectionA'
import SectionBTabs from '../components/fund_sup_new/SectionBTabs'
import {
  MOCK_BANNER_LIST,
  ADD_SECA_CFG
} from '../common/config.js'
import '../styles/fund_sup_new/main.scss'
export default class FundSupNew extends Component{
  render() {
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
              <SectionBTabs />
            </div>
          </div>
        );
  }
}