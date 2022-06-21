import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAd0EL4lKPC1jfRLTCjNQrZhBI4DSajNqM",
    authDomain: "whatsapp-2c895.firebaseapp.com",
    projectId: "whatsapp-2c895",
    storageBucket: "whatsapp-2c895.appspot.com",
    messagingSenderId: "692511877692",
    appId: "1:692511877692:web:7f2c37ec1e83c57fb67139",
    measurementId: "G-KZRL7K9V4J"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;