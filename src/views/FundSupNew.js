import { Component } from 'react'
import BannerOne from '../components/BannerOne'
import AddSectionA from '../components/AddSectionA'
import {
  MOCK_BANNER_LIST,
  ADD_SECA_CFG
} from '../common/config.js'
import '../styles/fund_sup_new/main.scss'
// import '../styles/fund_sup_new.scss'
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
          </div>
        );
  }
}