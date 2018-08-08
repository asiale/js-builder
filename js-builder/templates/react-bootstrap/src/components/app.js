
import React from 'react';

const Header = () => {
    return (
        <div>
<h1> </h1> 
        </div>
    )
}

export default Header;

import React, { Component } from 'react';

import Header from './header';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header/>
            </div>
        )
    }
}

export default Home;

import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">

            </div>
        )
    }
}

export default Card;

import '.style/main.scss';
import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
    render() {
        return (
            <div className="home">
                { Header() }
            </div>
        );
    }
}
export default Home;

import React from 'react';

class Input extends Component {
    render() {
        return (
            <div className="input">
                <input>
            </div>
        )
    }
}

export default Input;
