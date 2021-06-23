import firebase from 'firebase/app'
import "../../services/firebase"
import Router from "next/router";

const LoginWithGoogle = () => {
    const login = () => {
        try{
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
                (userCred) => {
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