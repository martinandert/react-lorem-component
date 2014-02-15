"use strict";

var React       = require("react");
var merge       = require("react/lib/merge");
var loremIpsum  = require("lorem-ipsum");
var random      = require("seedable-random");

var Lorem = React.createClass({
  displayName: "Lorem",

  getDefaultProps: function() {
    return { 
      mode: "paragraphs", count: 5, 
      seed: 0, ordered: false
    };
  },

  render: function() {
    var options = merge(this.props, { 
      units: "paragraphs", 
      format: "html", 
      random: random 
    });

    random.seed(this.props.seed);

    var html = loremIpsum(options);
    var wrapper = React.DOM.div;

    if (this.props.mode === "list") {
      html = html.replace(/<p>(.*?)<\/p>/g, "<li>$1</li>");

      if (this.props.ordered) {
        wrapper = React.DOM.ol;
      } else {
        wrapper = React.DOM.ul;
      }
    }

    return this.transferPropsTo(
      wrapper({ dangerouslySetInnerHTML: { __html: html } })
    );
  }
});

module.exports = Lorem;
