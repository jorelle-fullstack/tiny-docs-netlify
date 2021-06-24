import firebase from 'firebase/app'
import '../../../services/firebase'
import 'firebase/firestore'

const forgotPassword = (email) => {
    const forgot = () => {
        try{
          firebase.auth().sendPasswordResetEmail(email).then(function(data){
            console.log(data)
          });
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <button onClick={forgot}>RESET PASSWORD</button>
    )
}

export default forgotPassword