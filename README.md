# React Lorem Component

A component for [React][1] that renders paragraph or list item tags full of [lorem ipsum][2] placeholder text.


## Installation

Install via npm:

```bash
% npm install react-lorem-component
```


## Usage

This library provides a React component named `Lorem` which renderes pseudo-random lorem ipsum text.

```jsx
var React = require('react');
var Lorem = require('react-lorem-component');

var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Lorem Ipsum</h1>
        <Lorem />
      </div>
    );
  }
});
```

The above `<Lorem />` tag by default renders five paragraphs of lorem wrapped in a `<div>`.


### Configuration Options

You can pass the following props to the `Lorem` component to fine-tune the output.

Prop                | Default            | Description
------------------- |:------------------:| ------------
mode                | 'paragraphs'       | if set to `'list'`, instead of `<p>` tags wrapped in a `<div>` it renders `<li>`s wrapped in an `<ul>`
ordered             | false              | if `mode` is set to `'list'` and this prop has a truthy value, the list items are wrapped in an `<ol>` tag
seed                | 0                  | the seed of the random number generator used for generating lorem text; changing this to a different natural number generates a different text
count               | 5                  | number of paragraphs to generate
sentenceLowerBound  | 5                  | minimum words per sentence
sentenceUpperBound  | 15                 | maximum words per sentence
paragraphLowerBound | 3                  | minimum sentences per paragraph
paragraphUpperBound | 7                  | maximum sentences per paragraph
format              | 'html'             | plain text or html
words               | ['ad','dolor',...] | custom word dictionary

The last seven properties are send directly to the [lorem-ipsum][3] node module which is used internally to generate the lorem text.

Other properties you pass (eg. `className`) are transferred to the wrapping tag.


## Example

The examples code is located at `example` directory. You can clone this repository and run `make install example` and point your web browser to
`http://localhost:3000`.


## Licence

Released under The MIT License.


[1]: http://facebook.github.io/react/
[2]: http://en.wikipedia.org/wiki/Lorem_ipsum
[3]: https://github.com/knicklabs/node-lorem-ipsum
