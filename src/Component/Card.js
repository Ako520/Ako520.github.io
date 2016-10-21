import React, { PropTypes } from 'react'
import {hashHistory} from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class OneCard extends React.Component {
  constructor(){
    super();
    this.state={
      howlong:""
    }
  }

  jump(x){
    hashHistory.push(`/view/${x}`)
  }
  componentDidMount() {
    // getCardData().then( (res) =>{
    //   this.setState({
    //     data:res,
    //     wait:false
    //   });
    // } )
    let createTime = this.props.createTime;
    let par = /(\d+)-(\d+)-(\d+)T(\d+)/;
    let arr = createTime.match(par);
    let creatYear = arr[1];
    let creatMonth = arr[2];
    let creatDay = arr[3];
    let creatHour = arr[4];

    let curTime = new Date();
    let curYear = curTime.getFullYear();
    let curMonth = curTime.getMonth();
    let curDay = curTime.getDate();
    let curHour = curTime.getHours();
    console.log(curTime,curYear,curMonth,curDay);
    if (curYear > creatYear) {
      this.setState({
        howlong:`${curYear - creatYear}年前`
      });
    }
    else if (curMonth > creatMonth) {
      this.setState({
        howlong:`${curMonth - creatMonth}月前`
      });
    }
    else if (curDay > creatDay) {
      this.setState({
        howlong:`${curDay - creatDay}天前`
      });
    }
    else if (curHour > creatHour) {
      this.setState({
        howlong:`${curHour - creatHour}小时前`
      });
    }
    else if (curHour = creatHour) {
      this.setState({
        howlong: "刚刚"
      });
    }


  }
  handJump(){
    let id = this.props._id;
    hashHistory.push(`/view/${id}`)
  }
  render () {
    let styles={
      all:{
        width:"80%",
        maxWidth:"1200px",
        boxShadow:"0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
        bordrRadius:"20px",
        margin:"0 auto 30px",
        paddingBottom:"40PX"
      }
    }
    let x=this.props.subtitle;let y="a<br/>b"
    return(
      <Card style={styles.all} onTouchTap={this.handJump.bind(this)}>
        <CardTitle title={this.props.title}  subtitle={this.state.howlong}/>
        <CardText>
          <div dangerouslySetInnerHTML={{__html:this.props.subtitle}}/>
        </CardText>
        <CardActions>
          <FlatButton tton label="阅读全文" backgroundColor="#a4c639" hoverColor="#8AA62F" />
        </CardActions>
      </Card>
    )
  }
}
export default OneCard;
