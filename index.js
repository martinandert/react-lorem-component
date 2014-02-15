"use strict";

var React       = require("react");
var merge       = require("react/lib/merge");
var loremIpsum  = require("lorem-ipsum");
var random      = require("seedable-random");

var Lorem = React.createClass({
  displayName: "Lorem",

  getDefaultProps: function() {
    return { count: 5, seed: 0 };
  },

  render: function() {
    var options = merge(this.props, { 
      units: "paragraphs", 
      format: "html", 
      random: random 
    });

    random.seed(this.props.seed);

    var html = loremIpsum(options);

    return this.transferPropsTo(
      React.DOM.div({ dangerouslySetInnerHTML: { __html: html } })
    );
  }
});

module.exports = Lorem;
