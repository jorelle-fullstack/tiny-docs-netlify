import firebase from 'firebase/app'
import "../../services/firebase"
import Router from "next/router";

const LoginWithGoogle = () => {
    const login = () => {
        try{
            //Firebase Auth with Google
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
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
        <button onClick={login}>Login With Google</button>
    )
}

export default LoginWithGoogle