import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Statistics extends Component {
  render() {
    return (
      <div className='game_statistics'>
        <h5>Statistics:</h5>
        <div>
          <p>
            Steps: <span>{this.props.steps}</span>
          </p>
          <p>
            False: <span>{this.props.falseSteps}</span>
          </p>
          <p>
            Right: <span> {this.props.rightSteps}</span>
          </p>
        </div>
        <Button variant='warning' onClick={this.props.resetStatistics}>
          Reset
        </Button>
      </div>
    );
  }
}
