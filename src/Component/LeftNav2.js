import React, { PropTypes } from 'react'
import {Link} from "react-router"
import avatar from '../images/avatar.jpg'
class LeftNav extends React.Component {
  render () {
    let styles={
      name:{
        padding:"20px",
        color:"white",
        fontSize:"2.6rem"
      },
      avatar:{
        margin:"0 auto",
        width:"150px",
        height:"150px",
        background: `url(${avatar}) no-repeat`,
        backgroundPosition:"0% 100%",
        backgroundSize:"110%"
      },
      list:{
        margin:'20px 0 20px 0',
        padding:'10px'
      }
    };
    return(
      <div className="content-leftnav">
          <h2 style={styles.name}>Ako酱</h2>
          <avatar style={styles.avatar}></avatar>
          {this.props.toggle}
          <div style={styles.list}>
            <Link to="/" activeStyle={{background:"#5370BE"}} onlyActiveOnIndex={true}><span  className="fa fa-home" aria-hidden="true"></span><span>Home</span></Link>
            <Link to="/blog" activeStyle={{background:"#5370BE"}}><span  className="fa fa-file-text-o" aria-hidden="true"></span><span>Blog</span></Link>
            <Link to="/work" activeStyle={{background:"#5370BE"}}><span  className=""></span><span>Work</span></Link>
            <Link to="/about" activeStyle={{background:"#5370BE"}}><span  className=""></span><span>About</span></Link>
          </div>
      </div>
    )
  }
}

export default LeftNav;
