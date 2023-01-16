import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import BlogCard from '../components/blog-card'
import FooterLight from '../components/footer-light'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Slide Right</title>
        <meta
          name="description"
          content="Sliding Door Repair &amp; Maintenance"
        />
        <meta property="og:title" content="Slide Right" />
        <meta
          property="og:description"
          content="Sliding Door Repair &amp; Maintenance"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e67dbcc-4b7c-4877-bad5-096a83ca6b14/10d8a5bf-5b42-4c20-b2f3-c39c084ae217?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <main className="home-main">
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
        <div id="top" className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text">
                <span>
                  We are a full-service sliding glass door repair company
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <span className="home-text04">
                installing, replacing and repairing
              </span>
              <h1 className="home-text05">
                with years of experience
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <Link
                to="/contact"
                className="home-primary button-primary button-lg button"
              >
                <span className="home-text06">
                  <span>Get Free Estimate</span>
                  <br></br>
                </span>
              </Link>
            </div>
            <div className="home-gallery">
              <div className="home-container01">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1567635810406-f3a85c8aa857?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUxfHxzbGlkaW5nJTIwZG9vcnN8ZW58MHx8fHwxNjYzMjMyNDU4&amp;ixlib=rb-1.2.1&amp;w=1000"
                  className="home-image"
                />
              </div>
              <div className="home-container02">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1616860744588-fcc95e7cc721?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHNsaWRpbmclMjBkb29yc3xlbnwwfHx8fDE2NjMyMzIxOTQ&amp;ixlib=rb-1.2.1&amp;w=1000"
                  className="home-image1"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610333684078-c89bd57f2e46?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxzbGlkaW5nJTIwZG9vcnN8ZW58MHx8fHwxNjYzMjMyMTk0&amp;ixlib=rb-1.2.1&amp;w=1000"
                  className="home-image2"
                />
              </div>
              <div className="home-container03">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGdsYXNzJTIwc2xpZGluZyUyMGRvb3JzfGVufDB8fHx8MTY2MzIzMjUxNw&amp;ixlib=rb-1.2.1&amp;w=1000"
                  className="home-image3"
                />
                <div className="home-container04">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1576589497175-ce3d0453ea46?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGdsYXNzJTIwZG9vcnxlbnwwfHx8fDE2NjMyNDU3MTk&amp;ixlib=rb-1.2.1&amp;w=500"
                    className="home-image4"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1576589497175-ce3d0453ea46?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGdsYXNzJTIwZG9vcnxlbnwwfHx8fDE2NjMyNDU3MTk&amp;ixlib=rb-1.2.1&amp;w=500"
                    className="home-image5"
                  />
                </div>
              </div>
            </div>
            <div className="home-container05">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1616860744588-fcc95e7cc721?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHNsaWRpbmclMjBkb29yc3xlbnwwfHx8fDE2NjMyMzIxOTQ&amp;ixlib=rb-1.2.1&amp;w=1000"
                className="home-image6"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1610333684078-c89bd57f2e46?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxzbGlkaW5nJTIwZG9vcnN8ZW58MHx8fHwxNjYzMjMyMTk0&amp;ixlib=rb-1.2.1&amp;w=1000"
                className="home-image7"
              />
            </div>
            <h1 className="home-text09 h-scroll">
              <span>
                installing, replacing and repairing slidingdoors of all brands.
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-text-container">
            <span className="home-text13">our services</span>
            <h2 className="home-text14">
              <span>Sliding Door Repair &amp; Maintenance</span>
              <br className="Heading2"></br>
            </h2>
          </div>
          <div className="home-pro items">
            <Link to="/content" className="home-navlink">
              <BlogCard
                text="Read More"
                text1="Get Offer"
                button="FREE"
                image_alt="free"
                image_src="https://images.unsplash.com/photo-1504194104404-433180773017?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxGcmVlJTIwRXN0aW1hdGV8ZW58MHx8fHwxNjczNTYyMDA1&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-card-root-class-name7"
                className="home-component01"
              ></BlogCard>
            </Link>
            <Link to="/content" className="home-navlink1">
              <BlogCard
                text="Read More"
                text1="Get Offer"
                button="REPAIR"
                button1="Sliding Glass Door Repair"
                image_alt="free"
                image_src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHJlcGFpcnxlbnwwfHx8fDE2NzM1NjY4NjQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-card-root-class-name6"
                className="home-component02"
              ></BlogCard>
            </Link>
            <Link to="/content" className="home-navlink2">
              <BlogCard
                text="Read More"
                text1="Get Offer"
                button="REPAIR"
                button1="Sliding Glass Door Track Repair"
                image_alt="free"
                image_src="https://images.unsplash.com/photo-1602267774924-38124c047174?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxyZXBhaXJ8ZW58MHx8fHwxNjczNTY2ODY0&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-card-root-class-name8"
                className="home-component03"
              ></BlogCard>
            </Link>
            <Link to="/content" className="home-navlink3">
              <BlogCard
                text="Read More"
                text1="Get Offer"
                button="Replacement"
                button1="Door Handle Repair/Replacement"
                image_alt="free"
                image_src="https://images.unsplash.com/photo-1542169096-d626c9d082ab?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxEb29yJTIwUmVwbGFjZW1lbnR8ZW58MHx8fHwxNjczNTY3MTM5&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-card-root-class-name9"
                className="home-component04"
              ></BlogCard>
            </Link>
          </div>
          <div className="home-pro1 items">
            <Link to="/content" className="home-navlink4">
              <BlogCard
                text="Read More"
                text1="Get Offer"
                button="Certified"
                button1="Certified Technicians"
                image_alt="free"
                image_src="https://images.unsplash.com/photo-1576670263020-7842552c87d0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxUZWNobmljaWFuc3xlbnwwfHx8fDE2NzM1Njc0NTg&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-card-root-class-name10"
                className="home-component05"
              ></BlogCard>
            </Link>
            <Link to="/content" className="home-navlink5">
              <BlogCard
                text="Read More"
                text1="Get Offer"
                button="Replacement"
                button1="Rollers Replacement"
                image_alt="free"
                image_src="https://images.unsplash.com/photo-1648909983928-26c3d72ede34?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU4fHxSZXBsYWNlbWVudHxlbnwwfHx8fDE2NzM1Njc1MzU&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-card-root-class-name11"
                className="home-component06"
              ></BlogCard>
            </Link>
            <Link to="/content" className="home-navlink6">
              <BlogCard
                text="Read More"
                text1="Get Offer"
                button="Replacement"
                button1="Sliding Glass Door Replacement"
                image_alt="free"
                image_src="https://images.unsplash.com/photo-1516463654219-8bdc73d1bfae?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMxfHxHbGFzcyUyMFJlcGxhY2VtZW50fGVufDB8fHx8MTY3MzU2NzYwNg&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-card-root-class-name12"
                className="home-component07"
              ></BlogCard>
            </Link>
            <Link to="/content" className="home-navlink7">
              <BlogCard
                text="Read More"
                text1="Get Offer"
                button="Replacement"
                button1="Door Handle Repair/Replacement"
                image_alt="free"
                image_src="https://images.unsplash.com/photo-1653837865568-76b5df9bd584?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUyfHxSZXBsYWNlbWVudHxlbnwwfHx8fDE2NzM1Njc1MzU&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-card-root-class-name13"
                className="home-component08"
              ></BlogCard>
            </Link>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-text-container1">
              <span className="home-text17">our work</span>
              <h2 className="home-text18 Content">
                <span>Slide Right, Door Repair Services also</span>
                <br></br>
                <span>
                  ensure that in the event that your sliding glass door breaks
                  or fails to open and close properly, we will provide a fast
                </span>
                <br></br>
                <span>
                  repair service with our decades of experience. For more
                  information about our sliding glass door installation and
                  repair
                </span>
                <br></br>
                <span>services</span>
                <br></br>
              </h2>
              <h2 className="home-text27 Content">
                Our expert glass technicians have the experience and knowledge
                to install quality glass and extend the life of your new sliding
                glass patio doors. Our glass experts can also design and install
                custom glass sliding dog doors. Sliding Door Express technicians
                are professionally trained, licensed, and insured, so you can
                rest assured that the installation of your new sliding door or
                any other replacement parts you may need has been handled
                properly.
              </h2>
            </div>
            <a href="tel:+17862514754">
              <div className="home-container06">
                <span className="home-text28">
                  <span>CALL NOW</span>
                  <br></br>
                </span>
                <span className="home-text31">786-251-4754</span>
              </div>
            </a>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-text-container2">
              <span className="home-text32">about us</span>
              <h2 className="home-text33 Heading2">
                <span>Why choose us?</span>
                <br></br>
              </h2>
              <span className="home-text36">
                We are a full-service glass sliding doors professionals with
                organized office and plenty of in-house talent.
              </span>
              <div className="home-checklist">
                <div className="home-check-item">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text37">
                    <span>FREE Estimate</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text40">Certified Technicians</span>
                </div>
                <div className="home-container07">
                  <div className="home-check-item2">
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                  </div>
                  <span className="home-text41">
                    Quality services and support all time
                  </span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text42">
                    Over 10 years in the business
                  </span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text43">Future-Proofing Projects</span>
                </div>
                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text44">
                    Support in any implementation
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/rectangle%20109-1000w.png"
                className="home-image8"
              />
            </div>
          </div>
        </div>
        <div className="home-process section-container">
          <div className="home-max-width3 max-content-container">
            <span className="home-text45">Our process</span>
            <h2 className="home-text46 Heading2">
              <span>We use a simple three step process.</span>
              <br></br>
            </h2>
            <div className="home-step">
              <span className="home-text49">01</span>
              <div className="home-container08">
                <span className="home-text50">
                  <span>FREE ESTIMATE</span>
                  <br></br>
                </span>
                <span className="home-text53">
                  <span>We will estimate work price for free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step1">
              <span className="home-text56">02</span>
              <div className="home-container09">
                <span className="home-text57">
                  <span>FIX/INSTALL YOUR DOOR</span>
                  <br></br>
                </span>
                <span className="home-text60">
                  <span>
                    We will fix or install your doors the best way there is
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text63">03</span>
              <div className="home-container10">
                <span className="home-text64">ENJOY</span>
                <span className="home-text65">
                  <span>
                    Enjoy your fixed/new doors sliding smooth and quit
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width4 max-content-container">
            <span className="home-text68">what are you waiting?</span>
            <h2 className="home-text69 Heading2">
              Let’s Start &amp; Contact Us Now!
            </h2>
            <a href="tel:+17862514754">
              <div className="home-container11">
                <span className="home-text70">
                  <span>CALL NOW</span>
                  <br></br>
                </span>
                <span className="home-text73">786-251-4754</span>
              </div>
            </a>
          </div>
        </div>
      </main>
      <FooterLight></FooterLight>
    </div>
  )
}

export default Home
