import firebase from 'firebase/app'
import "../../../../services/firebase"

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
        res.status(200).json({ name: 'Test Update User Request' })
    } else {
      // Handle any other HTTP method
    }
}