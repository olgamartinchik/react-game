import React from "react";
import "./../styles/Modal.css";
import { Button } from "react-bootstrap";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <Button
          variant='danger'
          onClick={() => this.setState({ isOpen: true })}
        >
          Open rules
        </Button>

        {this.state.isOpen && (
          <div className='container'>
            <div className='modal'>
              <div className='modal-body'>
                <h3>Instructions to play memory</h3>
                <p>
                  Test your memory with this memory game. On the game board,
                  there are always two identical images. Start the game by
                  flipping a card. Then try to find another card that has the
                  same image as the first. If you can't find a pair, the flipped
                  cards will be flipped back with the face down. Try to remember
                  these images as it becomes easier to find pairs the longer you
                  play. When you find all the pairs in this memory, you have
                  completed the level.
                </p>
                <Button
                  variant='warning'
                  onClick={() => this.setState({ isOpen: false })}
                >
                  Close rules
                </Button>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
