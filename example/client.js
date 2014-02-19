/** @jsx React.DOM */

var React = require('react');
var Lorem = require('../');

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>React Lorem Component</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body>
          <div>
            <h1>Lorem Ipsum</h1>
            <Lorem count="10" seed="42" className="ipsum" />
          </div>
        </body>
      </html>
    );
  }
});

if (typeof window !== "undefined") {
  window.onload = function() {
    React.renderComponent(<App />, document);
  }
}

module.exports = App;
