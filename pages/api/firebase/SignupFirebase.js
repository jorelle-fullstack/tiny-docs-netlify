import React, {useState} from 'react'
import firebase from 'firebase/app'
import '../../../services/firebase'
import 'firebase/firestore'

const SignupWithFirebase = () => {
  //State
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //handler
  const handleOnSubmit =  async (event) => {
    event.preventDefault();
    console.log(email);
    try{
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
        firebase
        .firestore()
        .collection("users")
        .doc(user.user.uid)
        .set({ //Set Collection Data
          firstName,
          lastName,
          email,
          password,
          time_stamp: firebase.firestore.Timestamp.now()
        })
        .then(
          console.log(user)
          // Do something like redirect, store cookies, go to splash page
        ).catch((error) => {
          console.log(error.code);
        })
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
        name="first-name"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <input
        type="text"
        name="last-name"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
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
      <button type="submit">Sign Up with Firebase</button>
    </form>
  )
}

export default SignupWithFirebase