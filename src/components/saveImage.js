import { storage, db } from "../firebase";
import firebase from "firebase";

const addDB = async (user, memeURL) => {
  const databaseref = db.collection("photos").doc(user);
  const data_Exists = await databaseref.get();
  console.log(data_Exists);
  !data_Exists.exists
    ? databaseref.set({
        memes: firebase.firestore.FieldValue.arrayUnion(memeURL),
      })
    : databaseref.update({
        memes: firebase.firestore.FieldValue.arrayUnion(memeURL),
      });
};

const addStorage = (image, setbar, user) => {
  const uploading = firebase
    .storage()
    .ref("/images")
    .child("file_name")
    .putString(image, "data_url", { contentType: "image/png" });

  uploading.on(
    "state_changed",
    (snap) => {
      const progress = Math.round(
        (snap.bytesTransferred / snap.totalBytes) * 100
      );
      setbar(progress);
    },
    (error) => {
      alert(error.message);
    },
    () => {
      storage
        .ref("/images")
        .child("file_name")
        .getDownloadURL()
        .then((url) => {
          addDB(user, url);
        });
      setbar(0);
    }
  );
};

export default addStorage;
