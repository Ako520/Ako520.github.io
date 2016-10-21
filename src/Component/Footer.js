import React, { PropTypes } from 'react'
import {Link} from 'react-router'

class Footer extends React.Component {
  render () {
    return(
      <footer className="content-footer">
        <Link to="/" activeStyle={{background:"rgb(122, 18, 135)"}} onlyActiveOnIndex={true}><span  className="fa fa-home" aria-hidden="true"></span></Link>
        <Link to="/blog" activeStyle={{background:"rgb(122, 18, 135)"}}><span  className="fa fa-file-text-o" aria-hidden="true"></span></Link>
        <Link to="/work" activeStyle={{background:"rgb(122, 18, 135)"}}><span  className="">Work</span></Link>
        <Link to="/about" activeStyle={{background:"rgb(122, 18, 135)"}}><span  className="">About</span></Link>
      </footer>
    )
  }
}

export default Footer;
