var express = require('express');
const fs = require('fs');
var http = require('http');
var bodyParser = require('body-parser');
const path = require('path');


var app = express();
app.use(bodyParser.text({
    type: function(req) {
        return 'text';
    }
}));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/message", (req, res) => res.send("Hello!"));

// http.createServer(app).listen(3000, () => console.log("Server listening on port 3000!"));


module.exports = app;
