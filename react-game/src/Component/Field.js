import React from "react";
import Cards from "./Cards";

function Field() {
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

  const gameCards = images.concat(images).sort(() => Math.random() - 0.5);

  let link = "/images/";

  return gameCards.map((image, index) => {
    return (
      <>
        <Cards
          content={
            <img
              key={index}
              className='image-card'
              src={window.location.origin + link + image}
              alt='Card Image'
            />
          }
        />
      </>
    );
  });
}

export default Field;
