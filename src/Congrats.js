import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for Congratulatory message. 
 * @function
 * @param {object} props - Reeact props. 
 * @returns {JSX.Element} - Rendered component { or null if `success` prop is false}
 */
const Congrats = (props) => {
    return (
        <div data-test='component-congrats'>
        {
            props.success ?
            <span data-test='congrats-message'>
                Congratulations! You guessed the word!
            </span>
            : null    
        }
        </div>
    );
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;