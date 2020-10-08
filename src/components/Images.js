import React from "react";
import { Link } from "react-router-dom";
import LocalImage from "./LocalImage";
import NewImage from "./NewImage";
import "../Style/Images.css";

const photos = [
  "vict-baby.png",
  "ned.jpeg",
  "devilgirl.jpg",
  "trump.jpg",
  "one-does-not.jpg",
  "dank.png",
  "boy.png",
  "sad.png",
  "wolf.png",
  "fry.jpg",
  "jobs.jpg",
  "phone.jpg",
  "oldie.png",
  "image.png",
  "doubt.png",
  "crying.png",
  "sponge.png",
  "dog.png",
  "frust.png",
  "web.png",
];

const Images = () => {
  return (
    <div className="images">
      <div className="images__top">
        <NewImage />
        <p style={{ fontSize: "2em", fontWeight: "bold", margin: "0px" }}>OR</p>
        <LocalImage />
      </div>
      <div className="images__middle">
        <h2>Select an Image</h2>
        <div className="images__middle images-grid">
          {photos.map((photo) => {
            return (
              <Link to={`/${photo}`} key={photo}>
                <img
                  src={require(`../images/${photo}`)}
                  alt={photo}
                  key={photo}
                  className="meme-image"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Images;
