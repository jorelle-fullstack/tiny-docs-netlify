import React, {useState} from 'react'
import firebase from 'firebase/app'
import '../../../services/firebase'
import 'firebase/firestore'

const loginWithFirebase = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
          console.log(user);
          // Do something like redirect, store cookies, go to splash page
      }).catch((error) => {
        console.log(error.code);
      })
    }
    catch(error){
        console.log(error);
    }
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input 
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit">Login with Firebase</button> 
    </form>
    
  )
}

export default loginWithFirebase