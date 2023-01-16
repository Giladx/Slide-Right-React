import React from 'react'

import PropTypes from 'prop-types'

import './page-nav.css'

const PageNav = (props) => {
  return (
    <div className={`page-nav-page-nav ${props.rootClassName} `}>
      <div className="page-nav-nav-container">
        <a href="#free.estimate" className="page-nav-link">
          {props.text}
        </a>
        <a href="#sliding.glass.door.repair" className="page-nav-link1">
          {props.text1}
        </a>
        <a href="#sliding.glass.door.track.repair" className="page-nav-link2">
          {props.text2}
        </a>
        <a href="#door.handle.repair.replacement" className="page-nav-link3">
          {props.text3}
        </a>
        <a href="#certified.technicians" className="page-nav-link4">
          {props.text4}
        </a>
        <a href="#rollers.replacement" className="page-nav-link5">
          {props.text5}
        </a>
        <a href="#glass.replacement" className="page-nav-link6">
          {props.text6}
        </a>
        <a href="#sliding.screen.door.repair" className="page-nav-link7">
          {props.text7}
        </a>
        <a href="#sliding.glass.door.replacement" className="page-nav-link8">
          {props.text8}
        </a>
      </div>
    </div>
  )
}

PageNav.defaultProps = {
  text4: 'Certified Technicians',
  text3: 'Door Handle Repair/Replacement',
  text7: 'Sliding Screen Door Repair',
  text5: 'Rollers Replacement',
  text2: 'Sliding Glass Door Track Repair',
  text6: 'Glass Replacement',
  text8: 'Sliding Glass Door Replacement',
  text: 'Free Estimate ',
  rootClassName: '',
  text1: 'Sliding Glass Door Repair',
}

PageNav.propTypes = {
  text4: PropTypes.string,
  text3: PropTypes.string,
  text7: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default PageNav
