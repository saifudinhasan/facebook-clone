import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// 1st STEP
const firebaseConfig = {
  apiKey: "AIzaSyDwOxmI7ie6Bs63qhwG87eXJyMbEUjpejs",
  authDomain: "facebook-5e11f.firebaseapp.com",
  projectId: "facebook-5e11f",
  storageBucket: "facebook-5e11f.appspot.com",
  messagingSenderId: "1052993073951",
  appId: "1:1052993073951:web:60265092af75b86ca2f62a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default database;