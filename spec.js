var assert      = require('assert');
var React       = require('react');
var LoremIpsum  = require('./index');

describe('react-lorem-component', function() {
  it('transfers props', function() {
    React.renderComponentToString(LoremIpsum({ className: "lorem-ipsum" }), function(markup) {
      assert(/^<div [^>]*?class="lorem-ipsum"/.test(markup));
    });
  });

  describe('by default', function() {
    it('renders lorem ipsum paragraphs wrapped in a DIV tag', function() {
      var component = LoremIpsum({ 
        count: 2,
        words: ['foo'],
        sentenceLowerBound: 3,
        sentenceUpperBound: 3,
        paragraphLowerBound: 2,
        paragraphUpperBound: 2 
      });

      React.renderComponentToString(component, function(markup) {
        assert(/^<div [^>]+><p>Foo foo foo. Foo foo foo.<\/p><p>Foo foo foo. Foo foo foo.<\/p><\/div>$/.test(markup));
      });
    });
  });

  describe('with `mode` property set to "list"', function() {
    it('renders lorem ipsum list items wrapped in an UL tag', function() {
      var component = LoremIpsum({ count: 2, mode: 'list' });

      React.renderComponentToString(component, function(markup) {
        assert(/^<ul [^>]+><li>.+<\/li><\/ul>$/.test(markup));
      });
    });

    describe('and with `ordered` property set to `true`', function() {
      it('renders lorem ipsum list items wrapped in an OL tag', function() {
        var component = LoremIpsum({ count: 2, mode: 'list', ordered: true });

        React.renderComponentToString(component, function(markup) {
          assert(/^<ol [^>]+><li>.+<\/li><\/ol>$/.test(markup));
        });
      });
    });
  });
});
