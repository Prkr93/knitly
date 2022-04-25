
const serveInspiration = () => {
  return fetch('http://localhost:3001/inspirations')
    .then(res => res.json())
}

const servePattern = (pattern) => {
  return fetch('http://localhost:3001/inspire', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({pattern})
  }).then(response => console.log(response))
}

export {servePattern, serveInspiration};
