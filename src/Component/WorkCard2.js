import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  handleExpandChange(expanded){
    this.setState({expanded: expanded});
  }
  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="images/ok-128.jpg"
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg" />
        </CardMedia>
      </Card>
    );
  }
}
