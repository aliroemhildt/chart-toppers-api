const express = require('express');
const cors = require('cors');
const songs = require('./data.js');
const app = express();

app.use(express.json());
app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000/'
// }));

app.set('port', 4000);

app.locals.title = 'Chart Toppers API';

app.locals.songs = songs;

app.get('/api/v1/songs', (request, response) => {
  response.status(200).json(app.locals.songs);
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})