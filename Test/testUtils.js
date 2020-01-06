import { checkPropTypes } from "prop-types";
import { createStore } from "redux";

import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducer, middleware, and initial state.
 *  globals: rootReducer
 * @fuction storeFactory
 * @param {object} initialState - Initial state fro store
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}

/**
 * @function findByTestAttr
 * @param {shallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {*} attr - Attribute name.
 * @param {*} val - Value of attribute for search.
 */
export const findByTestAttr = (wrapper, attr, val) => {
    return wrapper.find(`[${attr}="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}