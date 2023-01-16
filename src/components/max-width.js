import React from 'react'

import PropTypes from 'prop-types'

import ServicesCard from './services-card'
import './max-width.css'

const MaxWidth = (props) => {
  return (
    <div className="max-width-max-width max-content-container">
      <div className="max-width-heading-container">
        <div className="max-width-text-container">
          <span className="max-width-text">{props.text}</span>
          <h2>
            <span>Sliding Door Repair &amp; Maintenance</span>
            <br className="Heading2"></br>
          </h2>
        </div>
        <div className="max-width-controls">
          <button className="max-width-button control-btn">
            <svg viewBox="0 0 1024 1024" className="max-width-icon">
              <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
            </svg>
            {props.button}
          </button>
          <button className="max-width-button1 control-btn">
            <svg viewBox="0 0 1024 1024" className="max-width-icon2">
              <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
            </svg>
            {props.button1}
          </button>
        </div>
      </div>
      <div className="max-width-cards-container items">
        <ServicesCard
          text="Free Estimate"
          text2="Learn More ..."
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        ></ServicesCard>
        <ServicesCard
          text="Sliding glass door repair"
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        ></ServicesCard>
        <ServicesCard
          text="Track repair"
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        ></ServicesCard>
        <ServicesCard
          text="Handle Repair/Replacement"
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        ></ServicesCard>
        <ServicesCard image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></ServicesCard>
        <ServicesCard
          text="Lock Repair/Replacement"
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        ></ServicesCard>
        <ServicesCard
          text="Rollers replacement "
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        ></ServicesCard>
        <ServicesCard
          text="Glass replacement"
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        ></ServicesCard>
        <ServicesCard
          text="Sliding glass door replacement"
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        ></ServicesCard>
        <ServicesCard
          text="Sliding screen door repair"
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        ></ServicesCard>
      </div>
    </div>
  )
}

MaxWidth.defaultProps = {
  text: 'our services',
  button1: '',
  button: '',
}

MaxWidth.propTypes = {
  text: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
}

export default MaxWidth
