import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test='quessed-instructions'>
               Try to guess the secret word! 
            </span>
        )
    } else {
        const guessedWordsRow = props.guessedWords.map((word, index) => (
            <tr data-test='guessed-word' key={`tr-${index}`}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div data-test='guessed-words'>
                <h3>Guessed Words</h3>
                <table className='table table-sm'>
                    <thead className='thead thead-light'>
                        <tr>
                            <th>Guess</th>
                            <th>Matching letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordsRow }
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test='component-quessed-words'>
            { contents }
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    )
}

export default GuessedWords;