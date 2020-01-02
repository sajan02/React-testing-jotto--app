
/**
 * 
 * @param {shallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {*} attr - Attribute name.
 * @param {*} val - Value of attribute for search.
 */
export const findByTestAttr = (wrapper, attr, val) => {
    return wrapper.find(`[${attr}="${val}"]`)
}