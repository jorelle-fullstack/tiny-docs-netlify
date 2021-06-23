import firebase from 'firebase/app'
import '../../../services/firebase'
import 'firebase/firestore'

const SignupWithFirebase = (first_name, last_name, email, password) => {
    const signUp = () => {
        try{
            firebase.auth().createUserWithEmailAndPassword("sugma2@bawls.com", "password2").then(function(user){
                firebase
                .firestore()
                .collection("users")
                .doc(user.user.uid)
                .set({
                    firstName:  first_name,
                    lastName: last_name,
                    email: email,
                    password: password,
                    time_stamp: firebase.firestore.Timestamp.now()
                })
                .then(
                    console.log(user)
                )
            })
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <button onClick={signUp}>Sign Up with Firebase</button>
    )
}

export default SignupWithFirebase