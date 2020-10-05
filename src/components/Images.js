import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalImage from "./LocalImage";
import NewImage from "./NewImage";
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
    <div className="image-grid">
      {photos.map((photo) => {
        return (
          <Link to={`/${photo}`} key={photo}>
            <img
              src={require(`../images/${photo}`)}
              alt={photo}
              style={{ width: "100px", height: "100px", cursor: "pointer" }}
              key={photo}
            />
          </Link>
        );
      })}
      <NewImage />
      <LocalImage />
    </div>
  );
};

export default Images;
