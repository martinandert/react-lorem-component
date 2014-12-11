"use strict";

var React = require('react');
var Lorem = require('../');

var App = React.createClass({
  getInitialState: function() {
    return { seed: 42 };
  },

  handleClick: function(e) {
    this.setState({ seed: Math.floor(Math.random() * 10000) });
  },

  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>React Lorem Component</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="/bundle.js"></script>
        </head>

        <body>
          <h1>Lorem Ipsum</h1>
          <p><button onClick={this.handleClick}>Randomize</button></p>

          <Lorem count="10" seed={this.state.seed} className="ipsum" />
        </body>
      </html>
    );
  }
});

if (typeof window !== 'undefined') {
  window.React = React;

  window.onload = function() {
    React.render(<App />, document);
  }
}

module.exports = App;
