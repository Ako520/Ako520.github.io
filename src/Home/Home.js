import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    console.log(1);
    return (
      <div className="home-container">
        <div className="mengban">
          <h1 style={{padding:"0px"}}>如果真爱有颜色,那么一定是 <span style={{color:"#70A3FF",fontSize:"3rem"}}>蓝色</span></h1>
          <p style={{padding:"30px 0 20px 0",fontSize:"2rem",verticalAlign:"bottom"}}>Ako酱的博客<span style={{fontSize:'2.3rem'}}>(｡・`ω´･)</span></p>
        </div>
      </div>
    )
  }
}

export default Home;
