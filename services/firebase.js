import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyBluPR2spVBhIvl7BUNL2qp1l0ljEyzaOk",
    authDomain: "proj-tinydocs.firebaseapp.com",
    projectId: "proj-tinydocs",
    storageBucket: "proj-tinydocs.appspot.com",
    messagingSenderId: "680273479837",
    appId: "1:680273479837:web:5fedb9bc7133d58b932c74",
    measurementId: "G-2PP5L7DQSW"
}

firebase.initializeApp(firebaseConfig);

export default firebase