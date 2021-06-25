import firebase from 'firebase/app'
import 'firebase/firestore'

export default function handler(req, res) {
    const users = [];
    try{
      firebase.firestore().collection('users').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          users.push(doc.data());
        });
        res.status(200).json(users);
      });
    }
    catch(error){
      res.status(404).json(erorr);
    }
}