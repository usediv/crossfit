import React, {Component} from 'react';
import './App.css';
import Card from './Card/Card';
import WrongButton from './WrongButton/WrongButton';
import RightButton from './RightButton/RightButton';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.updateCard = this.updateCard.bind(this);
    this.state = {
      cards: [
        {id: 1, clue: "famous boxer", word: "ali", explanation: "he boxed"},
        {id: 2, clue: "lake", word: "erie", explanation: "it's a lake ok"},
        {id: 3, clue: "milks fave cookie", word: "oreo", explanation: "oreos go good with milk"},
        {id: 4, clue: "famous2", word: "ali", explanation: "he boxed"},
        {id: 5, clue: "lake2", word: "erie", explanation: "it's a lake ok"},
        {id: 6, clue: "milk2", word: "oreo", explanation: "oreos go good with milk"},
      ],
      currentCard: {}
      }
    }
    componentWillMount(){
      const currentCards = this.state.cards;
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      });
      axios.get('http://localhost:8000/')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      axios.post('http://localhost:8000/', {
          name: 'Flavio'
        })

    }

    getRandomCard(currentCards){
      var card = currentCards[Math.floor(Math.random() * currentCards.length)]
      return(card);
  }
  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }
  render(){
    return (
      <div className="App">
        <div className="cardSection">
          <Card clue={this.state.currentCard.clue}
            word={this.state.currentCard.word}
            explanation={this.state.currentCard.explanation}
          />
        </div>
        <div className="buttonContainer">
          <WrongButton drawCard={this.updateCard}
          />
          <RightButton drawCard={this.updateCard}
          />
        </div>
      </div>
    );
  }
}

export default App;
