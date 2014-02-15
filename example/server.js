var express     = require('express');
var browserify  = require('connect-browserify');
var reactify    = require('reactify');
var React       = require('react');

require('node-jsx').install();

var App = require('./client');

express()
  .use('/bundle.js', browserify.serve({
    entry: __dirname + '/client',
    debug: true, watch: true, 
    transforms: [reactify]
  }))
  .get('/', function(req, res, next) {
    React.renderComponentToString(App(), function(markup) {
      res.send(markup);
    });
  })
  .listen(3000, function() {
    console.log('Point your browser to http://localhost:3000');
  });
  