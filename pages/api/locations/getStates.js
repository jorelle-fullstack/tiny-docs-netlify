import states from './state.json';

export default function handler(req, res) {
  const country_id = JSON.parse(JSON.stringify(req.body))

  var array_states = [];
  if (req.method === 'POST') {
    for (var i=0; i < Object.keys(states).length; i++) {
      if (states[i].country_id === country_id.country_id) {
        array_states[i] = states[i];
      }
    }
    res.status(200).json({ states: array_states })
  }
}