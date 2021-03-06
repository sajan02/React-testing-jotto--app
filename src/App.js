import './App.css';
import React, { Component } from 'react'
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
           { guessedWord: 'train', letterMatchCount: 3 },
           { guessedWord: 'party', letterMatchCount: 1 },
           { guessedWord: 'agile', letterMatchCount: 5 },
        ]}/>
      </div>
    )
  }
}

