// create web server
const express = require('express');
const app = express();
const port = 3000;
// create a comments array
const comments = [
    {name: 'Alex', content: 'This is a comment'},
    {name: 'Jane', content: 'This is another comment'}
];
// create a route to get the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
// run the server using node comments.js
// open the browser and go to http://localhost:3000/comments to see the comments