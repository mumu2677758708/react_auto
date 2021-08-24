import { Component } from 'react'
const formatRate = (rate) => {
  let rateFloat = parseFloat(rate);
  if (isNaN(rateFloat)) return "__";
  return rateFloat.toFixed(2);
}
export default class SectionBTabsContent extends Component {
  
  renderData = (item,index) => {
    let { title, risk,rate, time, tag} = item;
    let rateList = this.props.rateList
    return(
      <div data-sa="button-freedom" className="item"  key={index}>
        <div className="item__content">
          <div className="item__title">
            <span>{title}</span>
            <span className={"rish__label "+risk.rish_cl}>{risk.risk_desc}</span>
          </div>
          <div div className="item__main" >
            {time.showRate?
							(<div className="item__rate">
								{rate.rate_showTxtBool?
								(<div  className="rate__box" >
								<div className="rate__num">{rate.rate_num}</div>
								<div className="rate__unit smallSize">{rate.rate_unit}</div>
								</div>):
								(<div  className="rate__box" >
								<div className="rate__num">{rate.rate_num}</div>
								<div className="rate__unit">%</div></div>)}
							<div className="rate__desc">{rate.rate_desc}</div></div>)
							:
							(<div className="item__rate"><div className={ (formatRate(rateList[index]) < 0 ) ?"rate__box cl_green":"rate__box cl_red"}>
								<div className="rate__num">{formatRate(rateList[index])}</div>
								<div className="rate__unit">%</div>
							</div><div className="rate__desc">{rate.rate_desc}</div></div>)	}
              <div className="item__tag">
                <div className="tag__label">{tag.tag_label}</div>
                <div className="tag__desc">{tag.tag_desc}</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    let list = this.props.list
    return(
      <div type="content">
        {list.map((item,index) => this.renderData(item,index))}
      </div>
    )
  }
}