// create web server
// create a route for /comments
// when user sends a GET request to /comments, return a JSON object with some comments

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    {
      username: 'Todd',
      comment: 'lol that is so funny'
    },
    {
      username: 'Skyler',
      comment: 'I like to go birdwatching with my dog'
    },
    {
      username: 'Sk8erBoi',
      comment: 'Plz delete your account, Todd'
    },
    {
      username: 'onlysayswoof',
      comment: 'woof woof woof'
    }
  ]);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// run the server and visit http://localhost:3000/comments to see the comments