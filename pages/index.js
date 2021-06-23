import Link from 'next/link'
import initFirebase from "../services/firebase";

export default function Home() {
  const loginWithGoogle = () => {
    initFirebase.auth().signInWithPopup(new initFirebase.auth.GoogleAuthProvider()).then(
      (userCred) => {
        console.log(userCred);
      }
    )
  }

  const loginWithFacebook = () => {
    initFirebase.auth().signInWithPopup(new initFirebase.auth.FacebookAuthProvider()).then(
      (userCred) => {
        console.log(userCred);
      }
    )
  }

  return (
    <div className='page-home'>
     <Link href='other-page'> link to other page</Link>
    </div>
  )
}
