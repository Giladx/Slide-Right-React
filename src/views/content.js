import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import PageNav from '../components/page-nav'
import FooterLight from '../components/footer-light'
import './content.css'

const Content = (props) => {
  return (
    <div className="content-container">
      <Helmet>
        <title>Content - Slide Right</title>
        <meta
          name="description"
          content="Sliding Door Repair &amp; Maintenance"
        />
        <meta property="og:title" content="Content - Slide Right" />
        <meta
          property="og:description"
          content="Sliding Door Repair &amp; Maintenance"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e67dbcc-4b7c-4877-bad5-096a83ca6b14/10d8a5bf-5b42-4c20-b2f3-c39c084ae217?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <main className="content-main">
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
        <div className="content-hero section-container">
          <div className="content-max-width max-content-container">
            <div className="content-heading-container">
              <h1 className="content-text Heading1">
                <br></br>
                <span>CONTENT</span>
                <br></br>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
        <div className="content-content">
          <PageNav rootClassName="page-nav-root-class-name"></PageNav>
          <a href="#free.estimate" className="content-link">
            <div id="free.estimate" className="content-free-estimate">
              <h1 className="content-heading">
                <span>Free Estimate</span>
                <br></br>
              </h1>
              <span className="content-text07">
                <span>
                  At Slide-Right, we believe that our products and services
                  should be easily accessible to everyone. That’s why we offer a
                  free estimate on all of our services! Whether you need a new
                  glass door for your home or business, or you need repairs on
                  your existing door, or sliding door replacement we will be
                  happy to provide you with a free estimate.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  We understand that your time is precious, and that’s why we
                  offer a convenient online form for you to fill out in order to
                  get your free estimate. We will also come to your location to
                  take measurements and provide you with a quote.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  If you are looking for a glass door company that you can
                  trust, look no further than Slide-Right! We are dedicated to
                  providing our customers with the best possible service at the
                  most affordable prices. Contact us today to get your free
                  estimate!
                </span>
                <br></br>
              </span>
            </div>
          </a>
          <div
            id="sliding.glass.door.repair"
            className="content-sliding-glass-door-repair"
          >
            <h1 id="sli" className="content-text16">
              Sliding Glass Door Repair
            </h1>
            <span className="content-text17">
              <span>
                Glass Door Repair Services has been the go-to company for
                repairing broken doors and windows. We are a friendly, reliable,
                and well-respected team that provides professional services for
                both residential and commercial projects.
              </span>
              <br></br>
              <span>
                If you are concerned about your sliding glass door, we have a
                solution for you. We offer full service repair on all types of
                sliding glass doors to include aluminum, steel, composite and
                storm doors. Our expert technicians will look at every part of
                your door including the frame, safety bar, hinges and casings to
                ensure that problem areas are fixed properly.
              </span>
              <br></br>
              <span>
                We Fix your Glass Door. Our expert technicians can fix the most
                common problems and make sure your glass door is as it should
                be. We work hard to make sure there are no delays in your
                service; our highly trained and vetted technicians go out of
                their way to give quality service every time. We repair multiple
                types of glass doors, including single-pane, double-pane and
                wood windows.
              </span>
              <br></br>
              <span>
                When it comes to maintaining a glass door, you probably have
                some concerns. To help meet all your needs, we offer regular
                service, installation, and repair of your sliding glass doors.
                Our team can also train you on how to maintain your slider for
                continued success and safety.
              </span>
              <br></br>
            </span>
          </div>
          <div
            id="sliding.glass.door.track.repair"
            className="content-sliding-glass-door-track-repair"
          >
            <h1 className="content-text26">
              <span>Sliding Glass Door Track Repair</span>
              <br></br>
            </h1>
            <span className="content-text29">
              <span>
                Glass Door tacks are a very common issue. This situation only
                occurs when there is a problem with the track screwing your
                door. We can easily fix your Glass door and give you good
                quality service at a reasonable price.
              </span>
              <br></br>
              <span>
                If your sliding glass door has a problem opening or closing, or
                is flimsy or broken somehow, we can help. We can install or
                repair your sliding glass doors tracks to help them glide
                smoothly and be more energy efficient.
              </span>
              <br></br>
              <span>
                Our track repairs have helped many homeowners by replacing the
                broken tracks and parts of their garage sliding doors. We use
                only high-quality materials and methods to ensure you get your
                garage door working again as quickly and safely as possible.
              </span>
              <br></br>
            </span>
          </div>
          <div
            id="door.handle.repair.replacement"
            className="content-door-handle-repair-replacement"
          >
            <h1 className="content-text36">
              <span>Door Handle Repair/Replacement</span>
              <br></br>
            </h1>
            <span className="content-text39">
              <span>
                A broken or damaged glass door handle is something that can
                leave you feeling frustrated and anxious. We can repair your
                handles, install new ones and even replace them with new and
                better ones.
              </span>
              <br></br>
              <span>
                You can call us at +1-Your-Number-Here or visit our office at
                LOCATION HERE.
              </span>
              <br></br>
            </span>
          </div>
          <div
            id="certified.technicians"
            className="content-certified-technicians"
          >
            <h1 className="content-text44">
              <span>Certified Technicians</span>
              <br></br>
            </h1>
            <span className="content-text47">
              <span>
                With years of experience, our professional technicians provide
                the best service. We are certified and expert in installing,
                fixing, and replacing your sliding glass door. Our technicians
                come with the necessary tools for their job and will install the
                new sliding glass door just like it is in the showroom.
              </span>
              <br></br>
              <span>
                At our company we only use certified technicians. Our
                Technicians are trained in many aspects of the field. We have
                experience with all types of sliding glass doors, from large to
                small and more importantly install them. We can fit any door
                size so you can be sure that we can make your project perfect
                for your home or business.
              </span>
              <br></br>
            </span>
          </div>
          <div id="rollers.replacement" className="content-rollers-replacement">
            <h1 className="content-text52">
              <span>
                Rollers Replacement
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </h1>
            <span className="content-text55">
              <span>
                We can replace the sliding glass door roller. The sliding glass
                door rollers are used to tension and help push open the sliding
                glass doors while they are in one full rotation. They are
                essential to making your sliding glass door work properly.
              </span>
              <br></br>
              <span>
                If a slider glass door roller breaks, you will need to replace
                it as soon as possible. We can install new slider door rollers
                for all types of sliding glass doors. Sliding Door Rollers are
                designed and built to last so that you can use your sliding
                glass door on a regular basis without worrying about repair work
                or replacement parts.
              </span>
              <br></br>
              <span>
                We want to help you save money on your sliding door repair. Call
                us for more information about our glass door roller replacement
                services today.
              </span>
              <br></br>
            </span>
          </div>
          <div id="glass.replacement" className="content-glass-replacement">
            <h1 className="content-text62">
              <span>Glass Replacement</span>
              <br></br>
            </h1>
            <span className="content-text65">
              <span>
                We can help you with replacing the glass of your sliding glass
                door. The glass is a very critical aspect that you need to keep
                as healthy as possible. At All Glass, we have a large inventory
                of high quality replacement glass so that you can quickly
                replace broken or damaged glass panels with new ones. We
                specialize in making sure that our installations are done in
                time, With our expertise and quality equipment, we can ensure
                that your door can continue to operate smoothly. with the right
                materials and at an affordable price. Call us today for more
                information on replacing your sliding glass door!
              </span>
              <br></br>
            </span>
          </div>
          <div
            id="sliding.glass.door.replacement"
            className="content-sliding-glass-door-replacement"
          >
            <h1 className="content-text68">
              <span>Sliding Glass Door Replacement</span>
              <br></br>
            </h1>
            <span className="content-text71">
              <span>
                If you are looking for someone to replace the sliding glass door
                in your home, then look no further. At Slide-Right, we are able
                to replace sliding glass doors including vinyl, aluminum and
                steel doors. Whether you need a new custom-made door or one that
                has been damaged by a fallen tree or hurricane, we have the
                knowledge and expertise required to get the job done right.
              </span>
              <br></br>
            </span>
          </div>
          <div
            id="sliding.screen.door.repair"
            className="content-sliding-screen-door-repair"
          >
            <h1 className="content-text74">Sliding Screen Door Repair</h1>
            <span className="content-text75">
              <span>
                When you choose us to repair your sliding screen door, we can
                help you get your door working again. The technicians at
                Slide-Right are experienced and qualified to properly fix any
                problem with your sliding screen door.
              </span>
              <br></br>
              <span>
                We can come to you and help repair your sliding screen door if
                it has become damaged over time. We will fix the problem in no
                time and make sure it is even more efficient than before.
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </main>
      <FooterLight rootClassName="footer-light-root-class-name1"></FooterLight>
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
    </div>
  )
}

export default Content
