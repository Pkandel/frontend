import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './textfield.scss';

class TextField extends Component {
  render () {
    const {
      type,
      placeholder,
      style,
      onChange,
      error,
      success,
      warning,
      info,
      name,
      value } = this.props;
    const feedbackColor = () => {
      if (error) {
        return '#FFBABA';
      } else if (success) {
        return 'green';
      } else if (warning) {
        return '#9F6000';
      } else if (info) {
        return 'orange';
      } else {
        return '#e4e4e2';
      }
    };
    const color = feedbackColor();
    const inputStyle = { ...style, borderBottom: `1px solid ${color}` };
    const FeedbackDiv = error || warning || success || info
      ? <div className='feedback' style={{ color }} >{error}{success}{warning}{info}</div>
      : null;

    return (
      <div className='text-field'>
        <div className='text-field-input'>
          <input
            type={type}
            placeholder={placeholder}
            style={inputStyle}
            onChange={onChange}
            name={name}
            value={value}
          />
        </div>
        {FeedbackDiv}
      </div>

    );
  }
}

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  success: PropTypes.string,
  warning: PropTypes.string,
  info: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

export default TextField;
