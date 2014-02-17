/** @jsx React.DOM */

var React = require('react');
var Lorem = require('../');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Lorem Ipsum</h1>
        <Lorem count="10" seed="42" className="ipsum" />
      </div>
    );
  }
});

if (typeof window !== "undefined") {
  window.onload = function() {
    React.renderComponent(<App />, document);
  }
}

module.exports = App;
