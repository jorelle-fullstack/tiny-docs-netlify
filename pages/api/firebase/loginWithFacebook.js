import firebase from 'firebase/app'
import "../../../services/firebase"
import Router from "next/router";

const LoginWithFacebook = () => {
    const login = () => {
        try{
            //Firebase Auth with Facebook
            firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
                (userCred) => {
                    //Do something if login is successful
                  console.log(userCred);
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