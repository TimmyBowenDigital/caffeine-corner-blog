const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/blogs', (req, res) => {
  const id = req.query.id || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(({ blogName: `Hello ${id}!` }));
});

app.listen(3001, () =>
  console.log(`Express server is running on localhost:3001`)
);
