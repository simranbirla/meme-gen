import React, { useState, useEffect } from "react";
import { db } from "../firebase";
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
  const [url, setUrl] = useState();
  useEffect(() => {
    if (props.sign) {
      console.log(props.user.uid);
      db.collection("photos")
        .doc(props.user.uid)
        .onSnapshot((snap) => setMemes(snap.data()));
    }
  }, []);

  const share = (img) => {
    setUrl(img);
    document.querySelector(".share-btns").classList.add("show");
  };

  return (
    <div>
      Saved Images
      {memes
        ? memes.memes.map((meme) => (
            <>
              <img src={meme} onClick={() => setUrl(meme)} />
              <button onClick={() => share(meme)}>Share</button>
            </>
          ))
        : null}
      <div className="share-btns">
        <WhatsappShareButton
          url={url}
          title={"Look at this"}
          separator=" :: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <FacebookShareButton
          url={url}
          quote="Check this out : "
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={url}
          title="Check this out : "
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <PinterestShareButton
          url={String(window.location)}
          media={url}
          className="Demo__some-network__share-button"
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        <PocketShareButton
          url={url}
          title="Check this out"
          className="Demo__some-network__share-button"
        >
          <PocketIcon size={32} round />
        </PocketShareButton>
      </div>
    </div>
  );
};

export default SavedImages;
