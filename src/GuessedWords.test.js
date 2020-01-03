import React from 'react';
import { shallow } from 'enzyme';
import GuessedWords from './GuessedWords';
import { checkProps, findByTestAttr } from '../Test/testUtils';

const defaultProps ={
    guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 }
    ]
}

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props ', () => {
    checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'data-test', 'component-quessed-words');
        expect(component.length).toBe(1);
    })
    test('render instructions to guesss a word', () => {
        const instructions = findByTestAttr(wrapper, 'data-test', 'quessed-instructions');
        expect(instructions.text().length).not.toBe(0);
    })
    
})

describe('if there are guessed words', () => {
    
})

