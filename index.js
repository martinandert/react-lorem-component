"use strict";

var React       = require("react");
var merge       = require("react/lib/merge");
var loremIpsum  = require("lorem-ipsum");
var random      = require("seedable-random");

var Lorem = React.createClass({
  displayName: "Lorem",

  getDefaultProps: function() {
    return { count: 5, random: random, seed: 0 };
  },

  getInitialState: function() {
    random.seed(this.props.seed);

    var options     = merge(this.props, { units: "paragraphs", format: "plain" });
    var paragraphs  = loremIpsum(options).split(/\r?\n/).filter(function(p) { return p.length; });

    return { paragraphs: paragraphs };
  },

  render: function() {
    var content = this.state.paragraphs.map(function(paragraph, i) {
      return React.DOM.p({ key: i }, paragraph);
    });

    return this.transferPropsTo(React.DOM.div(null, content));
  }
});

module.exports = Lorem;
