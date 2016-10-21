import React, { PropTypes } from 'react'
import WorkCard from "../Component/WorkCard.js"



class Work extends React.Component {
  componentDidMount() {
    var echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
  }
  render () {
    return (
      <div className="wordcard-flex">
          <WorkCard imgsrc="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg"/>
          <WorkCard imgsrc="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg"/>
          <WorkCard imgsrc="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg"/>
          <WorkCard imgsrc="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg"/>
          <WorkCard imgsrc="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg"/>
          <div id="main" style={{width:"500px",height:"400px"}}></div>
      </div>
    )
  }
}

export default Work;
