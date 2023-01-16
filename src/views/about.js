import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FooterLight from '../components/footer-light'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Slide Right</title>
        <meta
          name="description"
          content="Sliding Door Repair &amp; Maintenance"
        />
        <meta property="og:title" content="About - Slide Right" />
        <meta
          property="og:description"
          content="Sliding Door Repair &amp; Maintenance"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e67dbcc-4b7c-4877-bad5-096a83ca6b14/10d8a5bf-5b42-4c20-b2f3-c39c084ae217?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <main className="about-main">
        <div>
          <DangerousHTML
            html={`<style>
::-webkit-scrollbar{
        height: 4px;
        width: 4px;
        background: #000E4A;
    }
    ::-webkit-scrollbar-thumb:horizontal{
        background: #000E4A;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        background: #FAFF00;
    }
</style>`}
          ></DangerousHTML>
        </div>
        <div className="about-hero section-container">
          <div className="about-max-width max-content-container">
            <div className="about-heading-container">
              <h1 className="about-text Heading1">
                <br></br>
                <span>ABOUT</span>
                <br></br>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
      </main>
      <span className="about-text5">
        We do custom installations and work on all types of doors, windows,
        glass, screens, bathrooms and more. At Slide Right, Slide Right prides
        itself on providing durable Home Guard patio doors and reliable
        workmanship from licensed Cincinnati patio door contractors. With our
        customer satisfaction guarantee and friendly service, you know
        you&apos;ll only get the best door replacement services in Miami,
        Florida.
      </span>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHNsaWRpbmclMjBkb29yc3xlbnwwfHx8fDE2NjM1Mzc2OTg&amp;ixlib=rb-1.2.1&amp;w=1000"
        className="about-image"
      />
      <div className="about-container1">
        <span className="about-text6">
          <span>
            Call now to learn more about our high quality products, or fill out
            our convenient online form to request a free, no-obligation door
            installation quote. We will not only provide you with a free quote
            before the installation process begins, but we will also provide a
            guide to help you select the sliding door that suits your vision and
            budget. We provide free quotes for replacement and installation of
            doors and windows in Miami . In addition to being a reliable choice
            for Cincinnati door replacements, Slide Right also offers window
            replacements and bathroom renovations.
          </span>
          <br></br>
        </span>
      </div>
      <FooterLight rootClassName="footer-light-root-class-name2"></FooterLight>
    </div>
  )
}

export default About
