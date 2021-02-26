import React, { Component } from "react";
import ModalRules from "./ModalRules";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <header>
          <div className='container'>
            <h1>Memory Game</h1>
            <ModalRules />
          </div>
        </header>
      </div>
    );
  }
}
