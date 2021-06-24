import firebase from 'firebase/app'
import "../../../services/firebase"
import "firebase/firestore"
import Router from "next/router";

const LoginWithGoogle = () => {
    const login = () => {
        try{
            //Firebase Auth with Google
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
                (userCred) => {
                    var isNewUser = userCred.additionalUserInfo.isNewUser;
                    // If user is new, save information to database

                    try{
                        if(isNewUser == true){
                            firebase
                            .firestore()
                            .collection("users")
                            .doc(userCred.user.uid)
                            .set({
                                firstName: userCred.additionalUserInfo.profile.given_name,
                                lastName: userCred.additionalUserInfo.profile.family_name,
                                email: userCred.additionalUserInfo.profile.email,
                                user_type: "freemium",
                                time_stamp: firebase.firestore.Timestamp.now()
                            })
                            .then(function(){
                                console.log("Data was successfully sent to cloud firestore")
                                // Do something like redirect the user to the dedicated page & store the user's data localstorage or cookies

																if (userCred) {
																	// User is signed in.
																	console.log(userCred);
																}
																else {
																	// No user is signed in.
																	console.log("no user signed in");
																}
															}
                          	)
                        }
                        else{
														// Do something like redirect the user to the dedicated page & store the user's data localstorage or cookies
														if (userCred) {
															// User is signed in.
															console.log(userCred);
														}
														else {
															// No user is signed in.
															console.log("no user signed in");
														}
												}
										}
                    catch(error){
                        console.log(error);
                    }
                }
            )
        } catch (error){
            console.log(error);
            console.log("logged in not successful");
        }
    }
    return (
         <button onClick={login}>Login With Google</button>
    )
}

export default LoginWithGoogle