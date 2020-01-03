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
        contents = null
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