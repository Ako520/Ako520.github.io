import React, { PropTypes } from 'react'
import axios from 'axios'
import {hashHistory} from 'react-router'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';


class AddArticle extends React.Component {
  handleSubmit(){
    // let id=this.refs.id.getValue();
    let title=this.refs.title.getValue();
    let subtitle=this.refs.subtitle.getValue();
    let content=this.refs.content.getValue();

    axios.post('http://localhost:3000/posts', {
      // id:id,
      title:title,
      content:content,
      subtitle:subtitle
    })
    .then(function (response) {
      console.log(response);
      hashHistory.push('/')
    })
    .catch(function (error){
      console.log(error);
    })
  }
  render () {
    let styles={
      all:{
        paddingTop:"15vh",
        display:'flex',
        width:"100%"

      },
      left:{
        paddingLeft:'30px',
        paddingRight:'30px',
        flexBasis:"50%",
        border:"1px red solid",
      },
      right:{
        paddingLeft:'30px',
        paddingRight:'30px',
        flexBasis:"50%",
        border:"1px blue solid",
      },
      button:{
        margin:"12"
      },
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
      fullwidth:{
        marginBottom:"40px"
      },
      text:{
        width:"80%"
      }
    }
    return(
      <div style={styles.all}>
        <div style={styles.left}>
          <TextField
            hintText="请输入"
            floatingLabelText="标题"
            multiLine={true}
            ref="title" style={styles.text}/><br />
          <TextField
            hintText="请输入"
            floatingLabelText="简介"
            multiLine={true}
            ref="subtitle" style={styles.text}/><br />
          <div style={styles.block}>
            <Checkbox
              label="react"
              style={styles.checkbox}
            />
            <Checkbox
              label="node"
              style={styles.checkbox}
            />
            <Checkbox
              label="JavaScript"
              style={styles.checkbox}
            />
            <Checkbox
            label="react-redux"
            style={styles.checkbox}
            />
            <Checkbox
              label="react-router"
              style={styles.checkbox}
            />
          </div>
          <TextField fullWidth={true}
            hintText="请输入"
            floatingLabelText="内容"
              multiLine={true}
            ref="content" style={styles.fullwidth}  rows={5} /><br />
          <RaisedButton label="提交" primary={true} style={styles.style} onTouchTap={this.handleSubmit.bind(this)}/>
          <RaisedButton label="重置" secondary={true} style={styles.button} />
        </div>
        <div style={styles.right}>
        </div>
      </div>
    )
  }
}

export default AddArticle;
