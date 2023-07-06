import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAgdJGe0BkWnQkhyqfchMwlkZjuQDd9-Rc",
  authDomain: "reacjs-api.firebaseapp.com",
  databaseURL: "https://reacjs-api-default-rtdb.firebaseio.com",
  projectId: "reacjs-api",
  storageBucket: "reacjs-api.appspot.com",
  messagingSenderId: "447724774503",
  appId: "1:447724774503:web:643bac3ff678671181a0c2",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore()

export default firebase;

// const firebaseDB = firebase.initializeApp(firebaseConfig);
// export default firebaseDB.database().ref();


