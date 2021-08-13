import { Component } from 'react'
import { MOCK_CARD_ONE } from '../../common/config'
export default class SectionA extends Component{
  renderCard = (cardData, index) => {
    const { title,title_sub,rate , apply_time ,desc} = cardData;
    return (
			<div className="card__content" key="index">
				<div className="title">
					<div className="title-main">
						<span className="tit-main">{title}</span>
						<span className="line">|</span>
						<span className="tit-sub">{title_sub}</span>
					</div>
					<div className="icon icon-kc"></div>
				</div>
				<div className="info-box">
					<div className="info-list">
						<div className="item rate">
							<div className="num"><span className="rate_num">{rate.rate_num}</span><span className="unit">%</span></div>
							<div className="desc">{rate.rate_desc}</div>
						</div>
						<div className="item time">
							<div className="num">{apply_time.apply_num}</div>
							<div className="desc">{apply_time.apply_desc}</div>
						</div>
						<div className="item btn-box">
							<a href="###">立即申购</a>
						</div>
					</div>
				</div>
				<div className="tips">
					<div className="tips-content">
						<span className="icon icon-tips">&nbsp;</span>
						<span className="txt">{desc}</span>
					</div>
				</div>
				
			</div>
        );
  }
  render() {
    return(
      <div className="sectionA__bg">
				<div className="sectionA__bg__box" >
					<div className="card_box">
						{
						  MOCK_CARD_ONE.map((cardData, index) => this.renderCard(cardData, index))
						}
					</div>
				</div>
      </div>
    )
  }
}