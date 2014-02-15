var assert      = require("assert");
var React       = require("react");
var LoremIpsum  = require("./index");

describe("react-lorem-component", function() {
  it("renders lorem ipsum text", function() {
    var component = LoremIpsum({ count: 1, words: ["foo"] });

    React.renderComponentToString(component, function(markup) {
      assert(/foo/.test(markup));
    });
  });
});
