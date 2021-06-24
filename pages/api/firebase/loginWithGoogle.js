import firebase from 'firebase/app'
import "../../../services/firebase"
import "firebase/firestore"
import Router from "next/router";

const LoginWithGoogle = () => {
  const login = () => {
    try {
      //Firebase Auth with Google
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
        (userCred) => {
          // Check if user is new
          var isNewUser = userCred.additionalUserInfo.isNewUser;

          // If user is new, save information to database
          try {
            if (isNewUser == true) {
              firebase
                .firestore()
                .collection("users")
                .doc(userCred.user.uid)
                .set({
                  firstName: userCred.additionalUserInfo.profile.given_name,
                  lastName: userCred.additionalUserInfo.profile.family_name,
                  email: userCred.additionalUserInfo.profile.email,
                  time_stamp: firebase.firestore.Timestamp.now()
                })
                .then(
                  console.log("Data was successfully sent to cloud firestore")
                  // Do something like redirect the user to the dedicated page & store the user's data localstorage or cookies

                )
            }
            else {

              // Do something like redirect the user to the dedicated page & store the user's data localstorage or cookies
              console.log("logged in successfully");
            }
          }
          catch (error) {
            console.log(error);
          }
        }
      )
    } catch (error) {
      console.log(error);
      console.log("logged in not successful");
    }
  }
  return (
    <button onClick={login}>Login With Google</button>
  )
}

export default LoginWithGoogle