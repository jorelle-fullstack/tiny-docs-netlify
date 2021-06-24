// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import firebase from 'firebase/app';
import "firebase/firestore";

export default function handler(req, res) {
  const db = firebase.firestore();

  db.collection('sample').add({name: "joe"});
    res.status(200).json({ name: 'Test Get all User request' })
  }