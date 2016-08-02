var assert    = require('assert');
var React     = require('react');
var ReactDOM  = require('react-dom/server');
var Lorem     = React.createFactory(require('./'));
var render    = ReactDOM.renderToString;

// hack: output React console warnings as failed assertions
console.error = function(message) {
  assert(false, message);
};

assert.matches = function(actual, expected, message) {
  if (!expected.test(actual)) {
    assert.fail(actual, expected, message, '!~');
  }
};

describe('react-lorem-component', function() {
  it('transfers props', function() {
    var markup = render(Lorem({ className: 'lorem-ipsum' }));

    assert.matches(markup, /^<div [^>]*?class="lorem-ipsum"/);
  });

  describe('by default', function() {
    it('renders lorem ipsum paragraphs wrapped in a HTML div element', function() {
      var component = Lorem({
        count: 2,
        words: ['foo'],
        sentenceLowerBound: 1,
        sentenceUpperBound: 1,
        paragraphLowerBound: 2,
        paragraphUpperBound: 2
      });

      var markup = render(component);

      assert.matches(markup, /^<div [^>]+><p>Foo. Foo.<\/p>\s*<p>Foo. Foo.<\/p><\/div>$/);
    });
  });

  describe('with `mode` property set to "list"', function() {
    it('renders lorem ipsum list items wrapped in a HTML ul element', function() {
      var component = Lorem({ count: 2, mode: 'list' });
      var markup = render(component);

      assert.matches(markup, /^<ul [^>]+><li>/);
    });

    describe('and with `ordered` property set to `true`', function() {
      it('renders lorem ipsum list items wrapped in a HTML ol element', function() {
        var component = Lorem({ count: 2, mode: 'list', ordered: true });
        var markup = render(component);

        assert.matches(markup, /^<ol [^>]+><li>/);
      });
    });
  });
});
