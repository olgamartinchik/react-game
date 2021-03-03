import React, { Component } from "react";
import AudioPlay from "./AudioPlay";
import ModalRules from "./ModalRules";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className='header'>
          <div className='container'>
            <AudioPlay />
            <h1>Memory Game</h1>
            <ModalRules />
          </div>
        </header>
      </>
    );
  }
}
