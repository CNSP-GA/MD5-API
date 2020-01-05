// File Author: CNSP
// Distributed Under: GNU Affero General Public License v3.0
// Copyright 2020, Clear Net Security Project, All rights reserved.

// Load neccesary modules
var express = require('express');
var md5 = require('md5');

// Run app function
var app = express();

// Listen to requests
app.get('*', function (req, res) {
  
// Remove the first "/"
  var text = req.url.replace('/', '');
  
// Display the hash encoded value
    res.send(md5(text));
});

// Have the app listen on port 3000
var server = app.listen(3000);
