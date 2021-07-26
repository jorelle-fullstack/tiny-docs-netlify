import firebase from 'firebase/app'
import 'firebase/firestore'
import "../../../../services/firebase"

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { 
      user_id,
      email, 
      firstName, 
      lastName,
    } = req.body;
    const db = firebase.firestore();
    db.collection("users").doc(user_id).set({
      email: email,
      firstName: firstName,
      lastName: lastName
    })
    .then(() => {
        res.status(200).json({ msg: 'success' })
    })
    .catch((error) => {
      res.status(400).json({ msg: 'failed' })
    });
  } else {
    
  }
}