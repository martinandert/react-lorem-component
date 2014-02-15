# React Lorem Component

A component for [React][1] that renders paragraph or list item tags full 
of lorem ipsum text.


## Installation

Install via npm:

    % npm install react-lorem-component


## Usage

Library provides a component named `Lorem` which renderes 
pseudo-random lorem ipsum text.

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

The above `<Lorem />` tag by default renders five paragraphs 
of lorem wrapped in a `<div>`.

TODO: explain config props


## Example

The examples code is located at `example` directory. You can clone this
repository and run `make install example` and point your web browser to
`http://localhost:3000`.


## Licence

Released under The MIT License.


[1]: http://facebook.github.io/react/
