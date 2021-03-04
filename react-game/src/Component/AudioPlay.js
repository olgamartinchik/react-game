import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class AudioPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMusicPlaying: false,
      playAudio: "https://img.icons8.com/ios/452/circled-pause.png",
      pausedAudio: "https://www.pngarts.com/files/2/Play-PNG-Free-Download.png",
    };
    this.handleClickBtnAudio = this.handleClickBtnAudio.bind(this);
  }

  handleClickBtnAudio() {
    if (this.state.isMusicPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.setState((prevState) => {
      return {
        isMusicPlaying: !prevState.isMusicPlaying,
      };
    });
  }

  render() {
    let linkAudio = "/assets/audio/1.mp3";
    return (
      <>
        <Button
          className='btn_audio'
          variant='outline-warning'
          onClick={this.handleClickBtnAudio}
        >
          <audio
            src={linkAudio}
            ref={(audioTag) => {
              this.audio = audioTag;
            }}
          />
          <img
            width='40'
            src={`${
              this.state.isMusicPlaying
                ? this.state.playAudio
                : this.state.pausedAudio
            }`}
            alt='button icon'
          />
        </Button>
      </>
    );
  }
}
