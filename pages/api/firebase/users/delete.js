export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
        res.status(200).json({ name: 'Test Delete User request' })
    } else {
      // Handle any other HTTP method
    }
}