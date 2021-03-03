import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import "./../styles/card.css";

class Cards extends Component {
  render() {
    // let linkAudio = "/assets/audio/2.mp3";
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
          {/* <audio
            src={window.location.origin + linkAudio}
            ref={(audioTag) => {
              this.audio = audioTag;
            }}
          /> */}
          {content}
        </Card>
      </>
    );
  }
}
export default Cards;
