var assert      = require('assert');
var React       = require('react');
var LoremIpsum  = require('./index');
var render      = require('react').renderComponentToString;

assert.matches = function(actual, expected, message) {
  if (!expected.test(actual)) {
    assert.fail(actual, expected, message, '!~');
  }
};

describe('react-lorem-component', function() {
  it('transfers props', function() {
    var markup = render(LoremIpsum({ className: 'lorem-ipsum' }));

    assert.matches(markup, /^<div [^>]*?class="lorem-ipsum"/);
  });

  describe('by default', function() {
    it('renders lorem ipsum paragraphs wrapped in a DIV tag', function() {
      var component = LoremIpsum({
        count: 2,
        words: ['foo'],
        sentenceLowerBound: 1,
        sentenceUpperBound: 1,
        paragraphLowerBound: 2,
        paragraphUpperBound: 2
      });

      var markup = render(component);

      assert.matches(markup, /^<div [^>]+><p>Foo. Foo.<\/p><p>Foo. Foo.<\/p><\/div>$/);
    });
  });

  describe('with `mode` property set to "list"', function() {
    it('renders lorem ipsum list items wrapped in an UL tag', function() {
      var component = LoremIpsum({ count: 2, mode: 'list' });
      var markup = render(component);

      assert.matches(markup, /^<ul [^>]+><li>.+<\/li><\/ul>$/);
    });

    describe('and with `ordered` property set to `true`', function() {
      it('renders lorem ipsum list items wrapped in an OL tag', function() {
        var component = LoremIpsum({ count: 2, mode: 'list', ordered: true });
        var markup = render(component);

        assert.matches(markup, /^<ol [^>]+><li>.+<\/li><\/ol>$/);
      });
    });
  });
});
