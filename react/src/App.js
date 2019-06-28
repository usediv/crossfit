
import React, {Component} from 'react';
import './App.css';
import Card from './Card/Card';
import WrongButton from './WrongButton/WrongButton';
import RightButton from './RightButton/RightButton';
import axios from 'axios';

class App extends Component {
  state = {
    cards: [],
    currentCard: {}
  }
  componentWillMount(){
      const currentCards = this.state.cards;
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      });
    }

    getRandomCard(currentCards){
      var card = currentCards[Math.floor(Math.random() * currentCards.length)]
      return(card);
  }
  updateCard = () => {
    var cluedat = '';
    var worddat = '';
    var expdat = '';
    axios.get('http://localhost:8000/')
      .then(response => {
        // console.log(resp);
        cluedat = response.data.Clue;
        worddat = response.data.Word;
        expdat = response.data.Explanation;
        const currentCards = this.state.cards;
        this.setState({
          cards: [
            {clue: cluedat, word: worddat, explanation: expdat}
          ],
          currentCard: this.getRandomCard(currentCards)
        })
        console.log(response.data.Clue)
        console.log(response.data.Word)
        console.log(response.data.Explanation)
      })
  }
  wrongCard = () => {
    axios.post('http://localhost:8000/wrong/', {
        clue: this.state.currentCard
      })
    this.updateCard();
  }
  render(){
    return (
      <div className="App">
        <div className="cardSection">
          {(this.state.currentCard) ? <Card clue={this.state.currentCard.clue}
            word={this.state.currentCard.word}
            explanation={this.state.currentCard.explanation}
          /> : ''}
        </div>
        <div className="buttonContainer">
          <WrongButton drawCard={this.wrongCard}
          />
          <RightButton drawCard={this.updateCard}
          />
        </div>
      </div>
    );
  }
}

export default App;
