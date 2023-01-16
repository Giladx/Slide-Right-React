import React from 'react'

import PropTypes from 'prop-types'

import './footer-contact-links.css'

const FooterContactLinks = (props) => {
  return (
    <div
      className={`footer-contact-links-contact-container ${props.rootClassName} `}
    >
      <span className="footer-contact-links-text">{props.text}</span>
      <a
        href="https://www.google.com/maps/search/2157+Village+View+Drive,+Old+Fort+Myers+Florida+33901/@26.5994828,-81.9447148,12z"
        target="_blank"
        rel="noreferrer noopener"
        className="footer-contact-links-link"
      >
        <span className="">2157 Village View</span>
        <br className=""></br>
        <span className="">
          Drive, Old Fort
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br className=""></br>
        <span className="">
          Myers Florida
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br className=""></br>
        <span className="">33901</span>
        <br className=""></br>
        <br className=""></br>
      </a>
      <a href="tel:+17862514754" className="footer-contact-links-link1">
        <span className="footer-contact-links-text10">+1-786-2514-754</span>
        <br className=""></br>
        <br className=""></br>
      </a>
    </div>
  )
}

FooterContactLinks.defaultProps = {
  rootClassName: '',
  text: 'Contact Us',
}

FooterContactLinks.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default FooterContactLinks
