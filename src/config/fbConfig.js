import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Replace this with your own config details
var firebaseConfig = {
  apiKey: "AIzaSyDYy8TGhhI7xG_v4c74o_v7gjqCOi4Z6D0",
  authDomain: "sorabel-3bf1b.firebaseapp.com",
  databaseURL: "https://sorabel-3bf1b.firebaseio.com",
  projectId: "sorabel-3bf1b",
  storageBucket: "sorabel-3bf1b.appspot.com",
  messagingSenderId: "857259043638",
  appId: "1:857259043638:web:b65e0c09bb7e7a82"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 