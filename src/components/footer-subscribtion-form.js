import React from 'react'

import PropTypes from 'prop-types'

import './footer-subscribtion-form.css'

const FooterSubscribtionForm = (props) => {
  return (
    <div className="footer-subscribtion-form-subscribe-container">
      <span className="footer-subscribtion-form-text">{props.text}</span>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="footer-subscribtion-form-textinput input"
      />
      <button className="footer-subscribtion-form-button button-primary button">
        {props.button}
      </button>
    </div>
  )
}

FooterSubscribtionForm.defaultProps = {
  button: 'Subscribe',
  textinput_placeholder: 'Enter your e-mail address',
  text: 'Subscribe to our newsletter',
}

FooterSubscribtionForm.propTypes = {
  button: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
}

export default FooterSubscribtionForm
