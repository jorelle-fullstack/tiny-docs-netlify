import Link from 'next/link'
import "../services/firebase"
import firebase from 'firebase/app'
import Router from "next/router";
import LoginWithGoogle from './api/firebase/loginWithGoogle';
import LoginWithFacebook from './api/firebase/loginWithFacebook';

export default function Home() {
  return (
    <div className='page-home'>
     <Link href='other-page'> link to other page</Link>
     <LoginWithGoogle/>
     <LoginWithFacebook/>
    </div>
  )
}
