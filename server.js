const express = require('express');
const app = express();
const songs = require('./data.js');
// will probably need to do something with cors
// const cors = require('cors'); but be more specific about what endpoints have access 

app.use(express.json());

app.set('port', 4040);

app.locals.title = 'Chart Toppers API';

app.locals.songs = songs;

app.get('/api/v1/songs', (request, response) => {
  const { songs } = app.locals;

  response.json({ songs });
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})