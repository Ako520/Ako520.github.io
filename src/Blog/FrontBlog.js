import React, { PropTypes } from 'react'
import OneCard from '../Component/Card.js'
import axios from 'axios'
import {getCardData} from '../utils/getData.js'

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:false
    }
  }
  componentDidMount() {
    // getCardData().then( (res) =>{
    //   this.setState({
    //     data:res,
    //     wait:false
    //   });
    // } )
    axios.get('http://localhost:3000/posts').then(res => {
      console.log(res);
      this.setState({
        data:res.data.datas
      });
    });
  }
  render () {
    console.log(this.state.data);
    let cards=this.state.data.map((item,i) => {
      return (
        <OneCard {...item} key={i}/>
      )
    })
    return (
      <div style={{width:"100%",marginTop:"20px"}}>
        {this.state.wait ? "请稍等" : cards }
      </div>
    )
  }
}

export default Blog;
