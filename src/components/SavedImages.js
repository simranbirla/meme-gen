import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import "../Style/SavedImage.css";

import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  PinterestIcon,
  PinterestShareButton,
  PocketIcon,
  PocketShareButton,
} from "react-share";

const SavedImages = (props) => {
  const [memes, setMemes] = useState();
  useEffect(() => {
    if (props.sign) {
      console.log(props.user.uid);
      db.collection("photos")
        .doc(props.user.uid)
        .onSnapshot((snap) => setMemes(snap.data()));
    }
  }, []);

  return (
    <div>
      {memes && props.sign ? (
        memes.memes.map((meme) => (
          <>
            <img src={meme} />
            <div className="share-btns">
              <WhatsappShareButton
                url={meme}
                title={"Look at this"}
                separator=" :: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <FacebookShareButton
                url={meme}
                quote="Check this out : "
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={meme}
                title="Check this out : "
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <PinterestShareButton
                url={String(window.location)}
                media={meme}
                className="Demo__some-network__share-button"
              >
                <PinterestIcon size={32} round />
              </PinterestShareButton>
              <PocketShareButton
                url={meme}
                title="Check this out"
                className="Demo__some-network__share-button"
              >
                <PocketIcon size={32} round />
              </PocketShareButton>
            </div>
          </>
        ))
      ) : (
        <h3>
          <Link to="/">Please Login</Link>{" "}
        </h3>
      )}
    </div>
  );
};

export default SavedImages;
