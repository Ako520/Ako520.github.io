import React from 'react';
import {CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class WorkCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      expanded:false
    }
  }
  handleExpandChange(expanded){
    this.setState({expanded: expanded});
  }
  render () {
    console.log(this.state.expanded);
    return(
        <CardMedia className="cardmedia"
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={this.props.imgsrc} />
        </CardMedia>
    )
  }
}

export default WorkCard;
