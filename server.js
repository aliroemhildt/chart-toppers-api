import { songData } from './data.js';

const express = require('express');
const app = express();
// will probably need to do something with cors
// const cors = require('cors'); but be more specific about what endpoints have access 

app.use(express.json());

app.set('port', 4040);

app.locals.title = 'Billboard Top 5 Songs';

app.locals.songData = songData;

app.get('/api/v1/years')