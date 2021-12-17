import React from "react";
import img1 from "../images/img1.jfif";
import img2 from "../images/img2.jfif";
import img3 from "../images/img3.jfif";
import img4 from "../images/img4.jfif";
import img5 from "../images/img5.jfif";
import img6 from "../images/img6.jfif";
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
              src={img1}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/"
            />
            <CardItems
              src={img2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Ooty"
              path="/about"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src={img4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Ooty"
              path="/products"
            />
            <CardItems
              src={img5}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adventure"
              path="/sign-up"
            />
            <CardItems
              src={img6}
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
