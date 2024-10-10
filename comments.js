// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var comments = require('./comments');

// 2. Create server
http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var pathname = url_parts.pathname;

    // 3. Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 4. Send the response body as "Hello World"
    if (pathname === '/addComment') {
        var comment = query.comment;
        var name = query.name;
        comments.addComment(name, comment);
        res.end('Comment added');
    } else if (pathname === '/getComments') {
        res.end(JSON.stringify(comments.getComments()));
    } else {
        res.end('Invalid request');
    }

}).listen(8080);

// Console will print the message
console.log('Server running at http://' + 'localhost' + ':' + '8080' + '/');