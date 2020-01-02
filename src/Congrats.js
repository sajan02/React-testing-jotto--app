import React from 'react';

/**
 * Functional react component for Congratulatory message. 
 * @function
 * @param {object} props - Reeact props. 
 * @returns {JSX.Element} - Rendered component { or null if `success` prop is false}
 */
export default (props) => {
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