import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import "./../styles/card.css";

class Cards extends Component {
  render() {
    let content;
    if (this.props.front) {
      content = this.props.content;
    } else {
      content = "";
    }
    return (
      <>
        <Card
          body
          className={`bg-info border="info" card-game ${
            this.props.front ? "card-back" : ""
          }`}
          onClick={this.props.rotate}
        >
          {content}
        </Card>
      </>
    );
  }
}
export default Cards;
