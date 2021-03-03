import React, { Component } from "react";
import Cards from "./Cards";

class Field extends Component {
  render() {
    let linkAudio = "/assets/audio/2.mp3";
    let link = "/assets/images/";

    return this.props.gameCards.map((image, index) => {
      return (
        <>
          <Cards
            isWallGame={this.props.isWallGame}
            changeStyle={this.props.changeStyle}
            key={`card-${index}`}
            rotate={() => this.props.rotate(index)}
            front={image.front}
            content={
              <img
                className='image-card'
                src={window.location.origin + link + image.content}
                alt='card icon'
              />
            }
          />
          <audio
            src={window.location.origin + linkAudio}
            ref={(audioTag) => {
              this.audio = audioTag;
            }}
          />
        </>
      );
    });
  }
}

export default Field;
