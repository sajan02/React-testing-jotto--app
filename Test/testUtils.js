import { checkPropTypes } from "prop-types";

/**
 * 
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