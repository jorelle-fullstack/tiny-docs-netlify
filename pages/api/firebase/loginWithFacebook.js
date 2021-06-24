import firebase from 'firebase/app'
import "../../../services/firebase"
import "firebase/firestore";
import Router from "next/router";

const LoginWithFacebook = () => {
  const login = () => {
    try{
      //Firebase Auth with Facebook
      firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        (userCred) => {
          //Do something if login is successful
          console.log(userCred);
          var isNewUser = userCred.additionalUserInfo.isNewUser;
          // If user is new, save information to database
          try{
            if(isNewUser == true){
              firebase
              .firestore()
              .collection("users")
              .doc(userCred.user.uid)
              .set({ // Set Collection Data
                firstName:  userCred.additionalUserInfo.profile.first_name,
                lastName: userCred.additionalUserInfo.profile.last_name,
                email: userCred.additionalUserInfo.profile.email,
                time_stamp: firebase.firestore.Timestamp.now()
              })
              .then(
                console.log("Data was successfully sent to cloud firestore")
              )
            }
            else{
              console.log("logged in successfully")
            }
          }
          catch(error){
            console.log(error);
          }
        }
      )
    } catch (error){
      console.log(error);
    }
  }
  return (
    <button onClick={login}>Login With Facebook</button>
  )
}

export default LoginWithFacebook