
import React from 'react';
import PropTypes from 'prop-types';

/** Button Component */
function HelloWorld({message}) {
  return <div>Hello {message} </div>
}

HelloWorld.propTypes = {
  /** Description to be displayed */
  message: PropTypes.string
};

HelloWorld.defaultProps = {
  message: 'World'
};
export default HelloWorld;
