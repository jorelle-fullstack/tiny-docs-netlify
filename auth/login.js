
import firebase from 'firebase/app'
import '../services/firebase'
import "firebase/firestore"

export const login = (type) => {

  try {

    let loginType
    switch (type) {
      case 'google':
        loginType = new firebase.auth.GoogleAuthProvider()
        break;
      case 'facebook':
        loginType = new firebase.auth.FacebookAuthProvider()
        break;

      default:
        throw 'Login type Unrecognized'
    }

    //Firebase Auth with Google
    firebase.auth().signInWithPopup(loginType).then(
      (userCred) => {
        // Check if user is new
        var isNewUser = userCred.additionalUserInfo.isNewUser;
        var firstName, lastName = '';
        console.log(userCred);
        try {
          // If user is new, save information to database
          if (isNewUser == true) {
            firebase
              .firestore()
              .collection("users")
              .doc(userCred.user.uid)
              .set({
                firstName: firstName ? userCred.additionalUserInfo.profile.given_name : userCred.additionalUserInfo.profile.first_name,
                lastName: lastName ? userCred.additionalUserInfo.profile.family_name : userCred.additionalUserInfo.profile.last_name,
                email: userCred.additionalUserInfo.profile.email,
                user_type: "freemium",
                time_stamp: firebase.firestore.Timestamp.now()
              })
              .then(function(){
                // Do something like redirect the user to the dedicated page & store the user's data localstorage or cookies
                if (userCred) {
                  // User is signed in.
                  console.log("Data was successfully sent to cloud firestore")
                  console.log(userCred);
                }
                else {
                  // No user is signed in.
                  console.log("no user signed in");
                }
              }
            )
          }
          else {
            if (userCred) {
              // Do something like redirect the user to the dedicated page & store the user's data localstorage or cookies
              // User is signed in.
              console.log("logged in successfully");
              console.log(userCred);
            }
            else {
              // No user is signed in.
              console.log("no user signed in");
            }
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

