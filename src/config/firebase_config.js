// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyBrf4N6LddMxv3Kh7vXtjFd3Is0YxC_10U",
    authDomain: "mario-514f4.firebaseapp.com",
    databaseURL: "https://mario-514f4.firebaseio.com",
    projectId: "mario-514f4",
    storageBucket: "mario-514f4.appspot.com",
    messagingSenderId: "675675460255"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
