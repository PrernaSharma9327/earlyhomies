import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAygmFjHkGuJcQt081d6LQdpO9mQDfxnZI",
  authDomain: "earlyhomies.firebaseapp.com",
  projectId: "earlyhomies",
  storageBucket: "earlyhomies.appspot.com",
  messagingSenderId: "376527619293",
  appId: "1:376527619293:web:0387ca9af988421ab28734"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

