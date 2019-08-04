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
    width: '60%',
    maxWidth: '312px',
    height: '50px',
    color: '#2B2C2B',
    borderRadius: '5px',
    backgroundColor: '#F3F3F3',
    border: '1px solid #ACACAC',
    boxShadow: 'inset 0px 0px 1px rgba(187,187,187,1)',
    backgroundImage: 'linear-gradient(90deg , rgb(238,238,238) 0%, rgb(254,254,254) 100%)',
    textShadow: 'rgba(254,254,254,0.5) 0px 1px 0px',
    outline: 0
  },
  clickHandler: () => {}
};

export default Button;