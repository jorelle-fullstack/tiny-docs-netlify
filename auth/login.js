
import firebase from 'firebase/app'
import '../services/firebase'
import "firebase/firestore"

/**
 * 
 * @param {*} type facebook || google 
 */
export const login = async (type) => {

  try {
    let loginType = new firebase.auth.GoogleAuthProvider()
    switch (type) {
      case 'google':
        loginType = new firebase.auth.GoogleAuthProvider()
        break;
      case 'facebook':
        loginType = new firebase.auth.FacebookAuthProvider()
        break;

      default:
        throw 'Login type Unrecognized'
        break;
    }

    //Firebase Auth with Google
    const userCred = await firebase.auth().signInWithPopup(loginType)
    // Check if user is new
    var isNewUser = userCred.additionalUserInfo.isNewUser;

    if (isNewUser == true) {
      await firebase
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
      console.log('%c 👥 New user Saved! ', 'color:Green;background:White;padding:5px;', userCred);
      handleSuccessAuthentication(userCred)

    } else {
      console.log('%c 👩‍🦰 Log in success ', 'color:Green;background:White;padding:5px;', userCred);
      handleSuccessAuthentication(userCred)
    }
  } catch (error) {
    console.log('%c ❌ Error on Auth process ', 'color:yellow;background:black;padding:5px;', error);
  }
}

function handleSuccessAuthentication(data) {

  if (!data) return

  const { credential, user } = data


  localStorage.token = credential.accessToken
  localStorage.user = JSON.stringify(user)

}