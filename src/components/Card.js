import React from "react";
import "./Card.css";
import CardItems from "./CardItems";

function Card() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/img1.jfif"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/"
            />
            <CardItems
              src="images/img2.jfif"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Ooty"
              path="/about"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="images/img3.jfif"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="images/img4.jfif"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Ooty"
              path="/products"
            />
            <CardItems
              src="images/img5.jfif"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adventure"
              path="/sign-up"
            />
            <CardItems
              src="images/img6.jfif"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Ooty"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
