import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { storeFactory } from '../Test/testUtils';


/**
 * Factory function to create a shallowWrapper for the Input Component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @return {shallowWrapper} 
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />);
    return wrapper;
}

setup();

describe('render', () => {
    describe('word has not been guessed', () => {
        test('render component without error', () => {

        })
        test('render input box', () => {
            
        })
        test('render submit button', () => {
            
        })      
    })

    describe('word has been guessed', () => {
        test('renders component without error', () => {
            
        })
        test('does not render input box', () => {
            
        })
        test('does not render submit button', () => {
            
        })
        
    })
    
    
})
