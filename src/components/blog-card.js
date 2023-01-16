import React from 'react'

import PropTypes from 'prop-types'

import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className={`blog-card-blog-card item ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-card-image"
      />
      <div className="blog-card-container">
        <button className="blog-card-button button-secondary button">
          {props.button}
        </button>
      </div>
      <button className="blog-card-button1 button-secondary button">
        {props.button1}
      </button>
    </div>
  )
}

BlogCard.defaultProps = {
  button1: 'Free Estimate',
  button: 'Web Design',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
}

BlogCard.propTypes = {
  button1: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogCard
