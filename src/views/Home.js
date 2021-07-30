import { Component } from "react";
import { Link } from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <ul>
          <li><Link to="/fund_sup_new">去精选基金页</Link></li>
        </ul>
      </div>
    )
  }
}

