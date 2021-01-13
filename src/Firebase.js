import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBYC1YghWOLQ1m9Nad8SaP14ja4Kz-E9BQ",
    authDomain: "reactjs-test-2b646.firebaseapp.com",
    projectId: "reactjs-test-2b646",
    storageBucket: "reactjs-test-2b646.appspot.com",
    messagingSenderId: "196752635752",
    appId: "1:196752635752:web:2546594f7f7274a96c48dd",
    
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
