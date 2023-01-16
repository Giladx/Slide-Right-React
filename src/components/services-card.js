import React from 'react'

import PropTypes from 'prop-types'

import './services-card.css'

const ServicesCard = (props) => {
  return (
    <div className="item services-card">
      <span className="services-card-text">{props.text}</span>
      <span className="services-card-text1">{props.text1}</span>
      <span className="services-card-text2">{props.text2}</span>
    </div>
  )
}

ServicesCard.defaultProps = {
  text: 'Certified Technicians',
  text1: '',
  text2: 'Learn more',
}

ServicesCard.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default ServicesCard
