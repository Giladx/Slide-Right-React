import React from 'react'

import PropTypes from 'prop-types'

import FooterInfoLinks from './footer-info-links'
import FooterNavigateLinks from './footer-navigate-links'
import FooterContactLinks from './footer-contact-links'
import FooterSubscribtionForm from './footer-subscribtion-form'
import FooterLogoCopywrite from './footer-logo-copywrite'
import './footer-light.css'

const FooterLight = (props) => {
  return (
    <div
      className={`footer-light-footer section-container ${props.rootClassName} `}
    >
      <div className="footer-light-container">
        <div className="footer-light-separator"></div>
      </div>
      <div className="footer-light-max-width max-content-container">
        <div className="footer-light-top-part">
          <div className="footer-light-links-container">
            <div className="footer-light-container1">
              <FooterInfoLinks
                rootClassName="footer-info-links-root-class-name"
                className=""
              ></FooterInfoLinks>
            </div>
          </div>
          <FooterNavigateLinks
            rootClassName="footer-navigate-links-root-class-name"
            className=""
          ></FooterNavigateLinks>
          <FooterContactLinks
            rootClassName="footer-contact-links-root-class-name"
            className=""
          ></FooterContactLinks>
          <div className="footer-light-container2"></div>
          <FooterSubscribtionForm className=""></FooterSubscribtionForm>
        </div>
      </div>
      <div className="footer-light-separator1"></div>
      <FooterLogoCopywrite className=""></FooterLogoCopywrite>
    </div>
  )
}

FooterLight.defaultProps = {
  rootClassName: '',
}

FooterLight.propTypes = {
  rootClassName: PropTypes.string,
}

export default FooterLight
