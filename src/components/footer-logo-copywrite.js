import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer-logo-copywrite.css'

const FooterLogoCopywrite = (props) => {
  return (
    <footer className="footer-logo-copywrite-max-width max-content-container">
      <Link to="/">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="footer-logo-copywrite-image"
        />
      </Link>
      <a
        href="https://011.ninja"
        target="_blank"
        rel="noreferrer noopener"
        className="footer-logo-copywrite-link"
      >
        <span>All rights received @ Slide Right </span>
        <span className="footer-logo-copywrite-text1">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>
          |
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="footer-logo-copywrite-text3">&lt;/un&gt;</span>
        <span>
          {' '}
          Coded by
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="footer-logo-copywrite-text5">011.ninja</span>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </a>
    </footer>
  )
}

FooterLogoCopywrite.defaultProps = {
  image_src: '/playground_assets/logo-1500h.png',
  image_alt: 'image',
}

FooterLogoCopywrite.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FooterLogoCopywrite
