{
  "name": "devcamp-js-builder",
  "version": "1.3.5",
  "description": "Generator for JavaScript projects",
  "repository": {
    "type": "git",
    "url": "git@github.com:bottega-code-school/js-builder.git"
  },
  "author": "Jordan Hudgens",
  "license": "MIT",
  "bin": {
    "js-generate": "./index.js"
  },
  "dependencies": {
    "inquirer": "^4.0.2"
  }
}
import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
    render() {
        return (
            <div className="home">
                { Header() }
                <Card />
            </div>
        );
    }
}

export default Home;
