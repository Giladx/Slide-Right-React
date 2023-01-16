import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer-info-links.css'

const FooterInfoLinks = (props) => {
  return (
    <div
      className={`footer-info-links-product-container ${props.rootClassName} `}
    >
      <span className="footer-info-links-text">{props.text}</span>
      <Link to="/about" className="footer-info-links-navlink">
        {props.text1}
      </Link>
      <Link to="/contact" className="footer-info-links-navlink1">
        <span className="">Contact</span>
        <br className=""></br>
      </Link>
      <span className="footer-info-links-text3">{props.text2}</span>
    </div>
  )
}

FooterInfoLinks.defaultProps = {
  rootClassName: '',
  text1: 'About',
  text: 'Info',
  text2: 'Read',
}

FooterInfoLinks.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default FooterInfoLinks
