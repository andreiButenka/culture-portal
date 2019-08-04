import React from 'react';
import PropTypes from "prop-types";

const Button = ({ style, clickHandler, children }) => {
  return (
    <button style={style} onClick={clickHandler}>{children}</button>
  )
};

Button.propTypes = {
  style: PropTypes.object,
  clickHandler: PropTypes.func
};

Button.defaultProps = {
  style: {
    width: '40%',
    height: '50px',
    color: 'white',
    borderRadius: '5px',
    backgroundColor: 'green',
    outline: 0
  },
  clickHandler: () => {}
};

export default Button;