import React, {useState} from 'react'
import firebase from 'firebase/app'
import '../../../services/firebase'
import 'firebase/firestore'

const loginWithFirebase = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
          console.log(user);
      })
    }
    catch(error){
        console.log(error);
    }
  }
  return (
    <button onClick={login}>Login with Firebase</button> //Change to input 
  )
}

export default loginWithFirebase