
const serveInspiration = () => {}

const servePattern = (pattern) => {
  fetch('http://localhost:3001/inspire', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({pattern})
  }).then(response => console.log(response))
}

export {servePattern};
