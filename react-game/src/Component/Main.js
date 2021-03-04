import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Field from "./Field";
import "./../styles/GameMenu.css";
import Statistics from "./Statistics";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
];
images.sort(() => Math.random() - 0.5);

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = this.buildCardsState(6);
    this.openFieldHandler = this.openFieldHandler.bind(this);
    this.rotate = this.rotate.bind(this);
    this.sortCards = this.sortCards.bind(this);
    this.buildCardsState = this.buildCardsState.bind(this);
    this.resetStatistics = this.resetStatistics.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }

  buildCardsState(len) {
    const gameCards = images
      .slice(0, len)
      .concat(images.slice(0, len))
      .sort(() => Math.random() - 0.5)
      .map((image) => {
        return {
          content: image,
          front: false,
        };
      });

    return {
      active: false,
      gameCards: gameCards,
      firstCard: null,
      steps: 0,
      rightSteps: 0,
      falseSteps: 0,
      cardsLength: len,
      isGameOver: false,
      buttonNewGame: null,
      isWallGame: false,
    };
  }
  changeStyle() {
    let changing = this.state.isWallGame;
    this.setState({
      isWallGame: !changing,
    });
  }
  componentDidMount() {
    let localStorageRef = JSON.parse(localStorage.getItem("localStorageData"));
    if (localStorageRef) {
      this.setState({ ...localStorageRef });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("localStorageData", JSON.stringify(this.state));
  }
  sortCards(len) {
    this.setState({ ...this.buildCardsState(len) });
  }

  openFieldHandler() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  rotateCardBack(cardIndex, front) {
    this.setState({
      gameCards: this.state.gameCards.map((image, index) => {
        if (index === cardIndex) {
          return {
            content: image.content,
            front: !image.front,
          };
        } else {
          return image;
        }
      }),
    });
  }

  rotate(cardIndex) {
    if (this.state.firstCard === null) {
      this.setState({ firstCard: cardIndex });
    } else {
      const firstCardContent = this.state.gameCards[this.state.firstCard]
        .content;
      const secondCardContent = this.state.gameCards[cardIndex].content;

      if (firstCardContent === secondCardContent) {
        this.state.rightSteps++;
        this.state.steps++;
        this.setState({ firstCard: null });
      } else {
        this.state.falseSteps++;
        this.state.steps++;

        setTimeout(() => {
          this.rotateCardBack(this.state.firstCard, false);
          this.rotateCardBack(cardIndex, false);
          this.setState({ firstCard: null });
        }, 1500);
      }
      let counter = 1;
      for (let i = 0; i < this.state.gameCards.length; i++) {
        if (this.state.gameCards[i].front === true) {
          counter++;
        }
      }

      if (counter === this.state.cardsLength * 2) {
        this.setState({
          isGameOver: true,
        });
      }
    }
    this.rotateCardBack(cardIndex, !this.state.gameCards[cardIndex].front);
  }

  resetStatistics() {
    const gameCardsReset = images
      .slice(0, 6)
      .concat(images.slice(0, 6))
      .sort(() => Math.random() - 0.5)
      .map((image) => {
        return {
          content: image,
          front: false,
        };
      });

    this.setState({
      active: false,
      gameCards: gameCardsReset,
      firstCard: null,
      steps: 0,
      rightSteps: 0,
      falseSteps: 0,
      cardsLength: 6,
      isGameOver: false,
      isWallGame: false,
    });
  }

  render() {
    return (
      <>
        <main className='main'>
          <div className='container'>
            <div className='game_menu'>
              <div className='game_mode'>
                <h5>Game mode: </h5>
                <Button
                  variant={
                    this.state.cardsLength === 6
                      ? "secondary"
                      : "outline-secondary"
                  }
                  className={`m-1 `}
                  onClick={() => this.sortCards(6)}
                >
                  Play with 12 cards
                </Button>
                <Button
                  variant={
                    this.state.cardsLength === 12
                      ? "secondary"
                      : "outline-secondary"
                  }
                  className={`m-1 `}
                  onClick={() => this.sortCards(12)}
                >
                  Play with 24 cards
                </Button>
                <Button
                  variant={
                    this.state.cardsLength === 18
                      ? "secondary"
                      : "outline-secondary"
                  }
                  className={`m-1 `}
                  onClick={() => this.sortCards(18)}
                >
                  Play with 36 cards
                </Button>
                <div>
                  <Button
                    className={`${
                      this.state.isWallGame ? "bg-info" : "bg-danger"
                    }`}
                    onClick={this.changeStyle}
                  >
                    Change Style Game
                  </Button>
                </div>
              </div>

              <Statistics
                rightSteps={this.state.rightSteps}
                falseSteps={this.state.falseSteps}
                steps={this.state.steps}
                resetStatistics={this.resetStatistics}
              />
            </div>
            <div className='newGame'>
              {this.state.isGameOver === true ? <h6>GAME OVER!</h6> : ""}
              {this.state.isGameOver === true ? (
                <p>Completed the game in {this.state.steps} steps</p>
              ) : (
                ""
              )}
              {this.state.isGameOver === true ? (
                <Button
                  variant='success'
                  size='sm'
                  onClick={this.resetStatistics}
                >
                  New Game
                </Button>
              ) : (
                ""
              )}
            </div>

            <div
              className={`board_container ${
                this.state.active ? "board_opening" : ""
              }`}
            >
              <div
                className={`board bg-dark ${
                  this.state.active ? "board_max" : ""
                }`}
              >
                <Button
                  className='btn-game'
                  variant='secondary'
                  onClick={this.openFieldHandler}
                >
                  <img
                    width='25'
                    src={
                      this.state.active
                        ? "https://image.flaticon.com/icons/png/512/49/49702.png"
                        : "https://cdn.iconscout.com/icon/premium/png-256-thumb/expand-2520895-2115146.png"
                    }
                    alt='icon button'
                  />
                </Button>

                <Field
                  isWallGame={this.state.isWallGame}
                  changeStyle={this.changeStyle}
                  gameCards={this.state.gameCards}
                  rotate={this.rotate}
                  front={this.front}
                  content={this.content}
                  firstCardContent={this.state.firstCard}
                />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
