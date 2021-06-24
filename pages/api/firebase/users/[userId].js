import firebase from 'firebase/app'
import 'firebase/firestore'

export default function handler(req, res) {
    const userId = req.query.userId
    var userInfo = firebase.firestore().collection('users').doc(userId);
    userInfo.get().then((doc) => {
      if (doc.exists) {
          res.status(200).json(doc.data());
      } else {
          res.status(200).json({message: "no user found."});
      }
    })
}