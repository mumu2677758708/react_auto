import { Component } from 'react'
import { Tabs } from 'antd';

import { MOCK_TABS_LIST, MOCK_BAND_LIST_1, MOCK_BAND_LIST_2, MOCK_BAND_LIST_3 } from '../../common/config'
import SectionBTabsContent from './SectionBTabsContent'

const { TabPane } = Tabs;

export default class SectionBTabs extends Component{
  renderBand = (item,index) => {
    const { tab_title, desc } = item
    let { rateList1, rateList2, rateList3,date1, date2, date3} = this.props
    let rateListArr = [rateList1, rateList2, rateList3];
    let dateArr = [date1, date2, date3]
    let list = [MOCK_BAND_LIST_1, MOCK_BAND_LIST_2, MOCK_BAND_LIST_3]
    return(
      <TabPane tab={tab_title} key={index}>
        <div className="desc__bg">
          <div className="desc__content">
            <div className="desc__tit">{desc.desc_title}：</div>
            <div className="desc__con">{desc.desc_content}</div>
          </div>
          <div className="list__bg">
            <SectionBTabsContent date={dateArr[index]} list={list[index]} rateList={rateListArr[index]}></SectionBTabsContent>
          </div>
			  </div>
      </TabPane>
    )
  }
  render() {
    return(
      <div className="sectionB__bg">
				<div className="tabs__box">
					<Tabs type="card">
						{MOCK_TABS_LIST.map((item, index)=>this.renderBand( item , index))}
					</Tabs>
				</div>
			</div>
    )
  }
}