import "../../../../services/firebase"

export default function handler(req, res) {
  if (req.method === 'POST') {
  // Process a POST request
    // res.status(200).json({ name: 'Test Sign up request' })
    const db = firebase.firestore();
    db.collection('sample').add({name: "joe"});

      
  } else {
    // Handle any other HTTP method
  }
}