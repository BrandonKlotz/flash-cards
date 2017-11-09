import React, { Component } from 'react';
import CardAnswer from './cardanswer'
import CardQuestion from './cardquestion'
import CardData from '../data.js'

class Cards extends Component {

    render() {
      const deck = [];
      deck.push(CardData[0].question);


        return (
          <div className="Cards">{deck}</div>
        );
    }
}

export default Cards;
