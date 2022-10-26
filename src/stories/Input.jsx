import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ disabled, placeholder, value, onChange, ...props }) => {
  return (
    <input
      type="text"
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      className="storybook-input"
      {...props}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  onChange: undefined,
  disabled: false,
};
