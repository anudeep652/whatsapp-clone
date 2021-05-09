import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyCK4FwsvRIjVbcydtvlFFDYMezPosEEa2g",
  authDomain: "whatspp-clone-ac798.firebaseapp.com",
  projectId: "whatspp-clone-ac798",
  storageBucket: "whatspp-clone-ac798.appspot.com",
  messagingSenderId: "279493179606",
  appId: "1:279493179606:web:15d85249a83f2bbcd8b177",
  measurementId: "G-B554RW7YQH"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
