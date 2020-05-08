'use strict';

// packages
const express = require('express'); // require loads the package from node modules

// global variables
const app = express(); // this app variable is our entire server
let count = 0;

// middleware
app.use(express.static('./public')); // static file hosting - point it at a folder

// route / endpoint is a destination on a server
// think telephone board, extension number

function callbackForHello(request, response){ // function signature of request, response
  response.send('hey there Nicco');
}

app.get('/hello', callbackForHello);

app.get('/dog', (req, res) => {
  res.send({
    name: 'Rufus',
    awesome: 4999,
    favoriteToy: 'bone'
  });
});

app.get('/asdf', (a, b) => b.send('potato'));

app.get('/count', (request, response) => {
  count++;
  response.send('' + count);
});

app.listen(3000, () => console.log('server is running on port 3000'));
