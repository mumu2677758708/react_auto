import { Component } from 'react'
import BannerOne from '../components/BannerOne'
import { MOCK_BANNER_LIST } from '../common/config.js'
// import '../styles/fund_sup_new.scss'
export default class FundSupNew extends Component{
  render() {
    return (
          <div className="home__bg no__bottom__nav">
            <div className="home__banner">
              <BannerOne data={MOCK_BANNER_LIST}/>
            </div>
          </div>
        );
  }
}