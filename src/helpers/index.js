/**
 * 
 * @Function
 * @param {string} quessedWord - Guessed word.
 * @param {string} secretWord - Secret word
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(quessedWord, secretWord) {
    const quessedWordSet = new Set(quessedWord.split(''));
    const secretWordSet = new Set(secretWord.split(''));
    return [ ...secretWordSet].filter((letter) => quessedWordSet.has(letter)).length;
}