
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

/** Button Component */
const Button = ( {text, cssClass} ) => (
  <button
    type="button"
    className={`default ${cssClass}`} 
  >
    {text}
  </button>
);

Button.propTypes = {
  /** Button Text */
  text: PropTypes.string,
  /** Button Classes: primary, secondary, disable */
  cssClass: PropTypes.string
};

Button.defaultProps = {
  text: 'button',
  cssClass: 'primary'
};
export default Button;
