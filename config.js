import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA7ek_pbg-pd-INVqyhRoeltk2AdoBiyfQ",
  authDomain: "xyz-1-7182b.firebaseapp.com",
  projectId: "xyz-1-7182b",
  storageBucket: "xyz-1-7182b.appspot.com",
  messagingSenderId: "203127453411",
  appId: "1:203127453411:web:f49a7c5c803bd82b7177d6",
  measurementId: "G-R4BQ8KZVRF"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
