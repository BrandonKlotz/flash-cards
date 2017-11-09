import React, { Component } from 'react';
import Cards from './cards.js'

// Define tha ContactCard comonent using ES6 class syntax
class DeckOfCards extends Component {

    render() {

        return (
            <div className="DeckOfCards">
              <p>Does this shit work?</p>
              <Cards />
            </div>
        );
    }
}

export default DeckOfCards;
