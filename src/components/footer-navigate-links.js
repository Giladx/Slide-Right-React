import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer-navigate-links.css'

const FooterNavigateLinks = (props) => {
  return (
    <div
      className={`footer-navigate-links-navigate-container ${props.rootClassName} `}
    >
      <span className="footer-navigate-links-text">{props.text}</span>
      <span className="footer-navigate-links-text1">{props.text1}</span>
      <span className="footer-navigate-links-text2">{props.text2}</span>
      <Link to="/privacy-policy" className="footer-navigate-links-navlink">
        {props.text3}
      </Link>
    </div>
  )
}

FooterNavigateLinks.defaultProps = {
  text2: 'Sitemap',
  rootClassName: '',
  text: 'Data',
  text1: 'Copyrights',
  text3: 'Privacy Policy',
}

FooterNavigateLinks.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
}

export default FooterNavigateLinks
