import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <span className="Navigation-Link navigation-links1-text">
        {props.text}
      </span>
      <span className="navigation-links1-text1 Navigation-Link">
        {props.text1}
      </span>
      <span className="navigation-links1-text2 Navigation-Link">
        {props.text2}
      </span>
      <span className="navigation-links1-text3 Navigation-Link">
        {props.text3}
      </span>
      <span className="navigation-links1-text4 Navigation-Link">
        {props.text4}
      </span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text1: 'Features',
  text4: 'Blog',
  text2: 'Pricing',
  text: 'About',
  text3: 'Team',
  rootClassName: '',
}

NavigationLinks1.propTypes = {
  text1: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks1
