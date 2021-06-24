import Link from 'next/link'
import "../services/firebase"
import firebase from 'firebase/app'
import Router from "next/router";
import SignupWithFirebase from './api/firebase/SignupFirebase';
import LoginWithFirebase from './api/firebase/loginFirebase';

export default function Home() {
  return (
    <div className='page-home'>
     <Link href='other-page'> link to other page</Link>

    </div>
  )
}
