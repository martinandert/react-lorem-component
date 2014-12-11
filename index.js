'use strict';

var React       = require('react');
var loremIpsum  = require('lorem-ipsum');
var random      = require('seedable-random');
var extend      = require('object-assign');

var Lorem = React.createClass({
  displayName: 'Lorem',

  getDefaultProps: function() {
    return {
      mode: 'paragraphs', count: 5,
      seed: 0, ordered: false
    };
  },

  render: function() {
    var props = extend({}, this.props, {
      units: 'paragraphs',
      format: 'html',
      random: random
    });

    random.seed(props.seed);

    var html = loremIpsum(props);
    var wrapper = React.DOM.div;

    if (props.mode === 'list') {
      html = html.replace(/<p>(.*?)<\/p>/g, '<li>$1</li>');

      if (props.ordered) {
        wrapper = React.DOM.ol;
      } else {
        wrapper = React.DOM.ul;
      }
    }

    props.dangerouslySetInnerHTML = { __html: html };

    return wrapper(props);
  }
});

module.exports = Lorem;
