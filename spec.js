var assert      = require("assert");
var React       = require("react");
var LoremIpsum  = require("./index");

describe("react-lorem-component", function() {
  it("renders lorem ipsum text", function() {
    var component = LoremIpsum({ 
      count: 2,
      words: ["foo"],
      sentenceLowerBound: 3,
      sentenceUpperBound: 3,
      paragraphLowerBound: 2,
      paragraphUpperBound: 2 
    });

    React.renderComponentToString(component, function(markup) {
      assert(/<p>Foo foo foo. Foo foo foo.<\/p><p>Foo foo foo. Foo foo foo.<\/p>/.test(markup));
    });
  });
});
