import React, { PropTypes } from 'react'
import {hashHistory} from 'react-router'

class NavHeader extends React.Component {
  back(){
    hashHistory.goBack();
  }
  render () {
    return(
      <div className="content-header">
        <span className="xx" onClick={this.back.bind(this)}>
          <span className="fa fa-angle-left" aria-hidden="true"></span>
          <span className="left">Back</span>
        </span>
        <h1>yago@{this.props.title}</h1>
        <span className="fa fa-bars right" aria-hidden="true"></span>
      </div>
    )
  }
}

export default NavHeader;
