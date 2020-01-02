import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../Test/testUtils';

const DATA_TEST = 'data-test';
const defaultProps = {
    success: false,
}

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Congrats {...setupProps}/>);
}

test('renders without error', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, DATA_TEST, 'component-congrats');
    expect(component.length).toBe(1);
})

test('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, DATA_TEST, 'component-congrats');
    expect(component.text()).toBe('');
})

test('renders non-empty congrats message when `sucess` prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, DATA_TEST, 'congrats-message');
    expect(message.text().length).not.toBe(0);
})

test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps)
})