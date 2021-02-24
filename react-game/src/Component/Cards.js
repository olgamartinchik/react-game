import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./../styles/card.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      front: false,
    };
    this.rotate = this.rotate.bind(this);
  }
  rotate() {
    this.setState({ front: !this.state.front });
  }
  render() {
    let content;
    if (this.state.front) {
      content = this.props.content;
    } else {
      content = "Back";
    }
    return (
      // <div>
      <Card
        body
        className='bg-info border="info" card-game'
        onClick={this.rotate}
      >
        {content}
      </Card>
      // </div>
    );
  }
}
export default Cards;
