import firebase from 'firebase/app'
import '../../../services/firebase'
import 'firebase/firestore'

export default function handler(req, res) {
  const email = JSON.parse(JSON.stringify(req.body))

  if (req.method === 'POST') {
    try{
      firebase.auth().sendPasswordResetEmail(email.email).then(function(data){
        res.status(200).json({ status_code: 200, message: "Successfully sent email reset password, kindly check your inbox."});
      })
      .catch((error) => {
        res.status(200).json(error);
      })
    }
    catch(error){
        res.status(200).json(error);
    }
  }
}