'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var loremIpsum = require('lorem-ipsum');
var random = require('seedable-random');
var extend = require('object-assign');

var Lorem = createReactClass({
  displayName: 'Lorem',

  getDefaultProps: function() {
    return {
      mode:     'paragraphs',
      format:   'html',
      count:    5,
      seed:     0,
      ordered:  false
    };
  },

  render: function() {
    var props = extend({}, this.props, {
      units:  'paragraphs',
      random: random
    });

    random.seed(props.seed);

    var html = loremIpsum(props);
    var wrapper;

    if (props.mode === 'list') {
      html = html.replace(/<p>(.*?)<\/p>/g, '<li>$1</li>');

      if (props.ordered) {
        wrapper = React.createFactory('ol');
      } else {
        wrapper = React.createFactory('ul');
      }
    } else {
      wrapper = React.createFactory('div');
    }

    props.dangerouslySetInnerHTML = { __html: html };

    // own props
    delete props.mode;
    delete props.ordered;
    delete props.random;

    // props passed to seedable-random
    delete props.seed;

    // props passed to lorem-ipsum
    delete props.count;
    delete props.units;
    delete props.sentenceLowerBound;
    delete props.sentenceUpperBound;
    delete props.paragraphLowerBound;
    delete props.paragraphUpperBound;
    delete props.format;
    delete props.words;
    delete props.suffix;

    return wrapper(props);
  }
});

module.exports = Lorem;
