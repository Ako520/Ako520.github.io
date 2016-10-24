
import React, { PropTypes } from 'react'
import {getArticle} from '../utils/getData.js'
import marked from 'marked'
import axios from 'axios'
import highlight from 'highlight.js'
import '../styles/markdown.css'
class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount() {
    // getArticle(this.props.params.url).then( (res) =>{
    //   this.setState({
    //     data:marked(res),
    //     wait:false
    //   });
    // } )
    axios.get(`https://raw.githubusercontent.com/Ako520/Ako520.github.io/master/README.md`).then(res => {
      console.log(res);
      this.setState({
        data:marked(res.data),
        wait:false
      });
    });
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    });
    return(
      <div className="post-content">
        {this.state.wait ? "请等一哈": <div dangerouslySetInnerHTML={{__html:this.state.data}} />}
      </div>
    )
  }
}

export default Item;
