import { Component } from 'react'
import { jumpLink } from '../../common/utils'
export default class AddSectionA extends Component{
  renderIcon = ({icon, label, link},index) => {
    return (
      <div className = "diamond" key = {index}
         onClick = {() => jumpLink(link)} >
        <img src={icon} className="diamond_icon" alt="img" />
        <p className="diamond_label">{label}</p>
      </div>
    )
  }
  render() {
    let { data = [] } = this.props
    return(
      <div className="addSecA__bg">
        {data.map((item, index) => this.renderIcon(item, index))}
      </div>
    )
  }
}