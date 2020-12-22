import React, { useState, useEffect } from "react";
import { db } from "../firebase";

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
      Saved Images
      {memes ? memes.memes.map((meme) => <img src={meme} />) : null}
    </div>
  );
};

export default SavedImages;
