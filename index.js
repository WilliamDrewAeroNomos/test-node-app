const express = require('express');
const app = express()
const port = 8080;

app.get('/', (req, res) => res.send('Hello from your EC2!'));

app.listen(port, () => console.log(`Instance listening on port ${port}...`))
