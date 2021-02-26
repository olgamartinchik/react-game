import React, { Component } from "react";
import Cards from "./Cards";

class Field extends Component {
  constructor(props) {
    super(props);

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
      // "13.jpg",
      // "14.jpg",
      // "15.jpg",
      // "16.jpg",
      // "17.jpg",
      // "18.jpg",
      // "19.jpg",
      // "20.jpg",
    ];

    const gameCards = images
      .concat(images)
      .sort(() => Math.random() - 0.5)
      .map((image) => {
        return {
          content: image,
          front: false,
        };
      });

    this.state = {
      gameCards: gameCards,
      firstCard: null,
    };
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
      // console.log(firstCardContent, secondCardContent);
      if (firstCardContent === secondCardContent) {
        // console.log("Same");
        this.setState({ firstCard: null });
      } else {
        console.log("Different");
        setTimeout(() => {
          this.rotateCardBack(this.state.firstCard, false);
          this.rotateCardBack(cardIndex, false);
          this.setState({ firstCard: null });
        }, 1500);
      }
    }
    this.rotateCardBack(cardIndex, !this.state.gameCards[cardIndex].front);

    // console.log(this.state.gameCards[cardIndex]);
  }

  render() {
    let link = "/images/";
    // console.log(this.state.firstCard);
    return this.state.gameCards.map((image, index) => {
      // console.log(index);
      return (
        <>
          <Cards
            rotate={() => this.rotate(index)}
            // onClick={this.rotate}
            key={{ index }}
            front={image.front}
            content={
              <img
                key={{ index }}
                className='image-card'
                src={window.location.origin + link + image.content}
                alt='Card Image'
              />
            }
          />
        </>
      );
    });
  }
}

export default Field;
