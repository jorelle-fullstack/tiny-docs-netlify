
import firebase from 'firebase/app'
import '../services/firebase'
import "firebase/firestore"
import { useRouter } from 'next/router'


/**
 * 3rd party Login
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

/**
 * 
 * @param {*} type login 
 */
export const passwordBasedLogin = async ({ email, password }) => {
  console.log(email, password)
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)

    console.log('%c 👩‍🦰 Log in success ', 'color:Green;background:White;padding:5px;', userCredential);
    handleSuccessAuthentication(userCredential, 'passwordBased')
    return userCredential

  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('%c ❌ Error on Auth process ', 'color:yellow;background:black;padding:5px;', error);
    return error
  }
}

/**
 * 
 * @param {*} type register 
 */
export const passwordBaseRegister = async ({ email, password, fName, lName }) => {

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)
    var user = userCredential.user;

    await firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set({
        firstName: fName,
        lastName: lName,
        email,
        user_type: "freemium",
        time_stamp: firebase.firestore.Timestamp.now()
      })

    console.log('%c 👥 Hooray! user created ', 'color:Green;background:White;padding:5px;', userCredential);
    handleSuccessAuthentication(userCredential, 'passwordBased')
    return user

  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message; ``
    console.log('%c ❌ Error on Auth process ', 'color:yellow;background:black;padding:5px;', errorMessage);
    return error
  }
}


/**
 * 
 * @param {*} data 
 * @param {*} type newPasswordBased || ''
 * @returns 
 */
function handleSuccessAuthentication(data, type = '') {

  if (!data) return
  const { credential, user } = data

  if (type === 'passwordBased') {
    localStorage.token = user.Aa
    localStorage.user = JSON.stringify(user)
    return
  }

  localStorage.token = credential.accessToken
  localStorage.user = JSON.stringify(user)
}