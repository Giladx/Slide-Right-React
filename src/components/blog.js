import React from 'react'

import PropTypes from 'prop-types'

import BlogCard from './blog-card'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-blog section-container">
      <div className="blog-max-width max-content-container">
        <span className="blog-text">
          <span>
            What we do
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </span>
        <h2 className="blog-text3">{props.heading}</h2>
        <span className="blog-text4">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation.
          </span>
        </span>
        <a
          href="tel:+17862514754"
          className="blog-primary button-secondary button-lg button"
        >
          {props.primary}
        </a>
        <div className="blog-blog-cards-container">
          <BlogCard
            image_src="https://images.unsplash.com/photo-1625275627863-25c0112833c8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzbGlkZSUyMHJpZ2h0fGVufDB8fHx8MTY2MzI1MTM0OQ&amp;ixlib=rb-1.2.1&amp;w=1500"
            rootClassName="blog-card-root-class-name"
          ></BlogCard>
          <BlogCard
            text1="Aug 14, 2022"
            button="advertising"
            image_src="https://images.unsplash.com/photo-1611466369262-85ec4a15f79d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxzbGlkZSUyMHJpZ2h0fGVufDB8fHx8MTY2MzI1MTM0OQ&amp;ixlib=rb-1.2.1&amp;w=1500"
            rootClassName="blog-card-root-class-name1"
          ></BlogCard>
          <BlogCard
            text1="Jul 12, 2022"
            button="Branding"
            image_src="https://images.unsplash.com/photo-1631441676111-c82a9d111417?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxzbGlkZSUyMHJpZ2h0fGVufDB8fHx8MTY2MzI1MTM0OQ&amp;ixlib=rb-1.2.1&amp;w=1500"
          ></BlogCard>
        </div>
      </div>
    </div>
  )
}

Blog.defaultProps = {
  primary: 'Explore the blog',
  heading:
    'We Provide Repair and Replacement Services For All Sliding Glass Doors Issues. From Rollers, Tracks, Locks, Handles and More Sliding Door Related Services.',
}

Blog.propTypes = {
  primary: PropTypes.string,
  heading: PropTypes.string,
}

export default Blog
