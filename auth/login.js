
import firebase from 'firebase/app'
import '../services/firebase'
import "firebase/firestore"
import { useRouter } from 'next/router'
import axios from 'axios'

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
    const userCred = await firebase.auth().signInWithPopup(loginType);
    // Check if user is new
    var isNewUser = userCred.additionalUserInfo.isNewUser;
    var firstName, lastName, email = "";
    var customer_id = "";
    console.log('%c ⚠ user Cred ', 'color:yellow;background:black;padding:5px;', userCred);

    if (isNewUser == true) {
      try {
        await axios.post('/api/stripe/users/createUserWithoutCard', {
          email: userCred?.additionalUserInfo?.profile?.email,
          first_name: firstName ? userCred?.additionalUserInfo?.profile?.given_name : userCred?.additionalUserInfo?.profile?.first_name,
          last_name: lastName ? userCred?.additionalUserInfo?.profile?.family_name : userCred?.additionalUserInfo?.profile?.last_name,
        })
        .then((response) =>
            customer_id = response.data.customer_details.id
          )
        }
      catch(error){
          console.log('%c ❌ Error on Getting Stripe Customer ID ', 'color:yellow;background:black;padding:5px;', error);
      }

      await firebase
        .firestore()
        .collection("users")
        .doc(userCred.user.uid)
        .set({
          firstName: firstName ? userCred?.additionalUserInfo?.profile?.given_name : userCred?.additionalUserInfo?.profile?.first_name,
          lastName: lastName ? userCred?.additionalUserInfo?.profile?.family_name : userCred?.additionalUserInfo?.profile?.last_name,
          email: userCred?.additionalUserInfo?.profile?.email,
          user_type: "freemium",
          customer_id: customer_id,
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
    throw 'Auth failed'
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
    var customer_id = "";
    // Process Stripe, Get Customer ID first
    try {
      await axios.post('/api/stripe/users/createUserWithoutCard', {
        email: email,
        first_name: fName,
        last_name: lName
      })
      .then((response) =>
          customer_id = response.data.customer_details.id
        )
      }
    catch(error){
        console.log('%c ❌ Error on Getting Stripe Customer ID ', 'color:yellow;background:black;padding:5px;', error);
    }

/*     try {
      await axios.post('/api/stripe/user/createUserWithCard', {
        card_number: card_number,
        card_exp_month: card_exp_month,
        card_exp_year: card_exp_year,
        card_cvc: card_cvc,
        email: email,
        first_name: fName,
        last_name: lName
      })
      .then((response) =>
          customer_id = response.data.customer_details.id
        )
      }
    catch(error){
        console.log('%c ❌ Error on Getting Stripe Customer ID ', 'color:yellow;background:black;padding:5px;', error);
    } */


    await firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set({
        firstName: fName,
        lastName: lName,
        email,
        user_type: "freemium",
        customer_id: customer_id,
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
async function handleSuccessAuthentication(data, type = '') {

  if (!data) return
  const { credential, user } = data

  if (type === 'passwordBased') {
    localStorage.token = user.Aa
    localStorage.user = JSON.stringify(user)
    localStorage.cus_id = await getCustomerId(user.uid).then((res) => { return res })
    return
  }
  localStorage.token = credential.accessToken
  localStorage.user = JSON.stringify(user)
  localStorage.cus_id = await getCustomerId(user.uid).then((res) => { return res })
}

async function getCustomerId(uid) {
  return await firebase.firestore().collection('users').doc(uid).get().then((doc) => { return doc.data().customer_id })
}