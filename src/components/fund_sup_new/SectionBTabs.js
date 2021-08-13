import { Component } from 'react'
import { Tabs } from 'antd';

import { MOCK_TABS_LIST } from '../../common/config'

const { TabPane } = Tabs;

export default class SectionBTabs extends Component{
  renderBand = (item,index) => {
    const { tab_title, desc } = item
    return(
      <TabPane tab={tab_title} key={index}>
        <div className="desc__bg">
          <div className="desc__content">
            <div className="desc__tit">{desc.desc_title}：</div>
            <div className="desc__con">{desc.desc_content}</div>
          </div>
          <div className="list__bg"></div>
			  </div>
      </TabPane>
    )
  }
  render() {
    return(
      <div className="sectionB__bg" >
				<div className="tabs__box">
					<Tabs type="card">
						{MOCK_TABS_LIST.map((item, index)=>this.renderBand( item , index))}
					</Tabs>
				</div>
			</div>
    )
  }
}