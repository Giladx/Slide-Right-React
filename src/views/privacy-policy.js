import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FooterLight from '../components/footer-light'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>Privacy-Policy - Slide Right</title>
        <meta
          name="description"
          content="Sliding Door Repair &amp; Maintenance"
        />
        <meta property="og:title" content="Privacy-Policy - Slide Right" />
        <meta
          property="og:description"
          content="Sliding Door Repair &amp; Maintenance"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e67dbcc-4b7c-4877-bad5-096a83ca6b14/10d8a5bf-5b42-4c20-b2f3-c39c084ae217?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <main className="privacy-policy-main">
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
        <div className="privacy-policy-hero section-container">
          <div className="privacy-policy-max-width max-content-container">
            <div className="privacy-policy-heading-container">
              <h1 className="privacy-policy-text Heading1">
                <br className="Heading1"></br>
                <span>PRIVACY POLICY</span>
                <br className="Heading1"></br>
                <br className="Heading1"></br>
              </h1>
            </div>
          </div>
        </div>
      </main>
      <div className="privacy-policy-leagal-text">
        <span className="privacy-policy-privacy-policy">
          <span>Privacy policy</span>
          <br></br>
          <br></br>
          <span>
            We respect your privacy and are committed to protecting it through
            our compliance with this privacy policy (“Policy”). This Policy
            describes the types of information we may collect from you or that
            you may provide (“Personal Information”) on the sliderightNOW.com
            website (“Website”), “Slide Right” mobile application (“Mobile
            Application”), and any of their related products and services
            (collectively, “Services”), and our practices for collecting, using,
            maintaining, protecting, and disclosing that Personal Information.
            It also describes the choices available to you regarding our use of
            your Personal Information and how you can access and update it.
          </span>
          <br></br>
          <br></br>
          <span>
            This Policy is a legally binding agreement between you (“User”,
            “you” or “your”) and this Website operator and Mobile Application
            developer (“Operator”, “we”, “us” or “our”). If you are entering
            into this agreement on behalf of a business or other legal entity,
            you represent that you have the authority to bind such entity to
            this agreement, in which case the terms “User”, “you” or “your”
            shall refer to such entity. If you do not have such authority, or if
            you do not agree with the terms of this agreement, you must not
            accept this agreement and may not access and use the Services. By
            accessing and using the Services, you acknowledge that you have
            read, understood, and agree to be bound by the terms of this Policy.
            This Policy does not apply to the practices of companies that we do
            not own or control, or to individuals that we do not employ or
            manage.
          </span>
          <br></br>
          <br></br>
          <span>Collection of information</span>
          <br></br>
          <br></br>
          <span>
            Our top priority is customer data security and, as such, we exercise
            the no logs policy. We may process only minimal user data, only as
            much as it is absolutely necessary to maintain the Services.
            Information collected automatically is used only to identify
            potential cases of abuse and establish statistical information
            regarding the usage and traffic of the Services. This statistical
            information is not otherwise aggregated in such a way that would
            identify any particular user of the system.
          </span>
          <br></br>
          <br></br>
          <span>Privacy of children</span>
          <br></br>
          <br></br>
          <span>
            We do not knowingly collect any Personal Information from children
            under the age of 18. If you are under the age of 18, please do not
            submit any Personal Information through the Services. If you have
            reason to believe that a child under the age of 18 has provided
            Personal Information to us through the Services, please contact us
            to request that we delete that child’s Personal Information from our
            Services.
          </span>
          <br></br>
          <br></br>
          <span>
            We encourage parents and legal guardians to monitor their children’s
            Internet usage and to help enforce this Policy by instructing their
            children never to provide Personal Information through the Services
            without their permission. We also ask that all parents and legal
            guardians overseeing the care of children take the necessary
            precautions to ensure that their children are instructed to never
            give out Personal Information when online without their permission.
          </span>
          <br></br>
          <br></br>
          <span>Use and processing of collected information</span>
          <br></br>
          <br></br>
          <span>
            We act as a data controller and a data processor when handling
            Personal Information, unless we have entered into a data processing
            agreement with you in which case you would be the data controller
            and we would be the data processor.
          </span>
          <br></br>
          <br></br>
          <span>
            {' '}
            Our role may also differ depending on the specific situation
            involving Personal Information. We act in the capacity of a data
            controller when we ask you to submit your Personal Information that
            is necessary to ensure your access and use of the Services. In such
            instances, we are a data controller because we determine the
            purposes and means of the processing of Personal Information.
          </span>
          <br></br>
          <br></br>
          <span>
            We act in the capacity of a data processor in situations when you
            submit Personal Information through the Services. We do not own,
            control, or make decisions about the submitted Personal Information,
            and such Personal Information is processed only in accordance with
            your instructions. In such instances, the User providing Personal
            Information acts as a data controller.
          </span>
          <br></br>
          <br></br>
          <span>
            In order to make the Services available to you, or to meet a legal
            obligation, we may need to collect and use certain Personal
            Information. If you do not provide the information that we request,
            we may not be able to provide you with the requested products or
            services. Any of the information we collect from you may be used for
            the following purposes:
          </span>
          <br></br>
          <br></br>
          <span>- Respond to inquiries and offer support</span>
          <br></br>
          <span>- Run and operate the Services</span>
          <br></br>
          <br></br>
          <span>
            Processing your Personal Information depends on how you interact
            with the Services, where you are located in the world and if one of
            the following applies: (i) you have given your consent for one or
            more specific purposes; (ii) provision of information is necessary
            for the performance of an agreement with you and/or for any
            pre-contractual obligations thereof; (iii) processing is necessary
            for compliance with a legal obligation to which you are subject;
            (iv) processing is related to a task that is carried out in the
            public interest or in the exercise of official authority vested in
            us; (v) processing is necessary for the purposes of the legitimate
            interests pursued by us or by a third party.
          </span>
          <br></br>
          <br></br>
          <span>
            {' '}
            Note that under some legislations we may be allowed to process
            information until you object to such processing by opting out,
            without having to rely on consent or any other of the legal bases.
            In any case, we will be happy to clarify the specific legal basis
            that applies to the processing, and in particular whether the
            provision of Personal Information is a statutory or contractual
            requirement, or a requirement necessary to enter into a contract.
          </span>
          <br></br>
          <br></br>
          <span>Disclosure of information</span>
          <br></br>
          <br></br>
          <span>
            {' '}
            Depending on the requested Services or as necessary to complete any
            transaction or provide any Service you have requested, we may share
            your information with our affiliates, contracted companies, and
            service providers (collectively, “Service Providers”) we rely upon
            to assist in the operation of the Services available to you and
            whose privacy policies are consistent with ours or who agree to
            abide by our policies with respect to Personal Information. We will
            not share any personally identifiable information with third parties
            and will not share any information with unaffiliated third parties.
          </span>
          <br></br>
          <br></br>
          <span>
            Service Providers are not authorized to use or disclose your
            information except as necessary to perform services on our behalf or
            comply with legal requirements. Service Providers are given the
            information they need only in order to perform their designated
            functions, and we do not authorize them to use or disclose any of
            the provided information for their own marketing or other purposes.
          </span>
          <br></br>
          <br></br>
          <span>Retention of information</span>
          <br></br>
          <br></br>
          <span>
            We will retain and use your Personal Information for the period
            necessary to comply with our legal obligations, to enforce our
            agreements, resolve disputes, and unless a longer retention period
            is required or permitted by law.
          </span>
          <br></br>
          <br></br>
          <span>
            We may use any aggregated data derived from or incorporating your
            Personal Information after you update or delete it, but not in a
            manner that would identify you personally. Once the retention period
            expires, Personal Information shall be deleted. Therefore, the right
            to access, the right to erasure, the right to rectification, and the
            right to data portability cannot be enforced after the expiration of
            the retention period.
          </span>
          <br></br>
          <br></br>
          <span>Cookies</span>
          <br></br>
          <br></br>
          <span>
            Our Services use “cookies” to help personalize your online
            experience. A cookie is a text file that is placed on your hard disk
            by a web page server. Cookies cannot be used to run programs or
            deliver viruses to your computer. Cookies are uniquely assigned to
            you, and can only be read by a web server in the domain that issued
            the cookie to you. If you choose to decline cookies, you may not be
            able to fully experience the features of the Services.
          </span>
          <br></br>
          <br></br>
          <span>
            We may use cookies to collect, store, and track information for
            security and personalization, to operate the Services, and for
            statistical purposes. Please note that you have the ability to
            accept or decline cookies. Most web browsers automatically accept
            cookies by default, but you can modify your browser settings to
            decline cookies if you prefer.
          </span>
          <br></br>
          <br></br>
          <span>Data analytics</span>
          <br></br>
          <br></br>
          <span>
            Our Services may use third-party analytics tools that use cookies,
            web beacons, or other similar information-gathering technologies to
            collect standard internet activity and usage information. The
            information gathered is used to compile statistical reports on User
            activity such as how often Users visit our Services, what pages they
            visit and for how long, etc. We use the information obtained from
            these analytics tools to monitor the performance and improve our
            Services. We do not use third-party analytics tools to track or to
            collect any personally identifiable information of our Users and we
            will not associate any information gathered from the statistical
            reports with any individual User.
          </span>
          <br></br>
          <br></br>
          <span>Do Not Track signals</span>
          <br></br>
          <br></br>
          <span>
            Some browsers incorporate a Do Not Track feature that signals to
            websites you visit that you do not want to have your online activity
            tracked. Tracking is not the same as using or collecting information
            in connection with a website. For these purposes, tracking refers to
            collecting personally identifiable information from consumers who
            use or visit a website or online service as they move across
            different websites over time. The Services do not track its visitors
            over time and across third-party websites. However, some third-party
            websites may keep track of your browsing activities when they serve
            you content, which enables them to tailor what they present to you.
            For a description of Do Not Track protocols for browsers and mobile
            devices or to learn more about the choices available to you, visit
            internetcookies.com
          </span>
          <br></br>
          <br></br>
          <span>Social media features</span>
          <br></br>
          <br></br>
          <span>
            Our Services may include social media features, such as the Facebook
            and Twitter buttons, Share This buttons, etc (collectively, “Social
            Media Features”). These Social Media Features may collect your IP
            address, what page you are visiting on our Services, and may set a
            cookie to enable Social Media Features to function properly. Social
            Media Features are hosted either by their respective providers or
            directly on our Services. Your interactions with these Social Media
            Features are governed by the privacy policy of their respective
            providers.
          </span>
          <br></br>
          <br></br>
          <span>Email marketing</span>
          <br></br>
          <br></br>
          <span>
            We offer electronic newsletters to which you may voluntarily
            subscribe at any time. We are committed to keeping your e-mail
            address confidential and will not disclose your email address to any
            third parties except as allowed in the information use and
            processing section or for the purposes of utilizing a third-party
            provider to send such emails. We will maintain the information sent
            via e-mail in accordance with applicable laws and regulations.
          </span>
          <br></br>
          <br></br>
          <span>
            In compliance with the CAN-SPAM Act, all e-mails sent from us will
            clearly state who the e-mail is from and provide clear information
            on how to contact the sender. You may choose to stop receiving our
            newsletter or marketing emails by following the unsubscribe
            instructions included in these emails or by contacting us.
          </span>
          <br></br>
          <br></br>
          <span>Push notifications</span>
          <br></br>
          <br></br>
          <span>
            We offer push notifications to which you may also voluntarily
            subscribe at any time. To make sure push notifications reach the
            correct devices, we use a third-party push notifications provider
            who relies on a device token unique to your device which is issued
            by the operating system of your device. While it is possible to
            access a list of device tokens, they will not reveal your identity,
            your unique device ID, or your contact information to us or our
            third-party push notifications provider. We will maintain the
            information sent via e-mail in accordance with applicable laws and
            regulations. If, at any time, you wish to stop receiving push
            notifications, simply adjust your device settings accordingly.
          </span>
          <br></br>
          <br></br>
          <span>Links to other resources</span>
          <br></br>
          <br></br>
          <span>
            The Services contain links to other resources that are not owned or
            controlled by us. Please be aware that we are not responsible for
            the privacy practices of such other resources or third parties. We
            encourage you to be aware when you leave the Services and to read
            the privacy statements of each and every resource that may collect
            Personal Information.
          </span>
          <br></br>
          <br></br>
          <span>Information security</span>
          <br></br>
          <br></br>
          <span>
            We secure information you provide on computer servers in a
            controlled, secure environment, protected from unauthorized access,
            use, or disclosure. We maintain reasonable administrative,
            technical, and physical safeguards in an effort to protect against
            unauthorized access, use, modification, and disclosure of Personal
            Information in our control and custody. However, no data
            transmission over the Internet or wireless network can be
            guaranteed.
          </span>
          <br></br>
          <br></br>
          <span>
            Therefore, while we strive to protect your Personal Information, you
            acknowledge that (i) there are security and privacy limitations of
            the Internet which are beyond our control; (ii) the security,
            integrity, and privacy of any and all information and data exchanged
            between you and the Services cannot be guaranteed; and (iii) any
            such information and data may be viewed or tampered with in transit
            by a third party, despite best efforts.
          </span>
          <br></br>
          <br></br>
          <span>Data breach</span>
          <br></br>
          <br></br>
          <span>
            In the event we become aware that the security of the Services has
            been compromised or Users’ Personal Information has been disclosed
            to unrelated third parties as a result of external activity,
            including, but not limited to, security attacks or fraud, we reserve
            the right to take reasonably appropriate measures, including, but
            not limited to, investigation and reporting, as well as notification
            to and cooperation with law enforcement authorities. In the event of
            a data breach, we will make reasonable efforts to notify affected
            individuals if we believe that there is a reasonable risk of harm to
            the User as a result of the breach or if notice is otherwise
            required by law. When we do, we will post a notice on the Services,
            send you an email, get in touch with you over the phone, mail you a
            letter.
          </span>
          <br></br>
          <br></br>
          <span>Changes and amendments</span>
          <br></br>
          <br></br>
          <span>
            We reserve the right to modify this Policy or its terms related to
            the Services at any time at our discretion. When we do, we will
            revise the updated date at the bottom of this page, post a
            notification within the Services, send you an email to notify you.
            We may also provide notice to you in other ways at our discretion,
            such as through the contact information you have provided.
          </span>
          <br></br>
          <br></br>
          <span>
            An updated version of this Policy will be effective immediately upon
            the posting of the revised Policy unless otherwise specified. Your
            continued use of the Services after the effective date of the
            revised Policy (or such other act specified at that time) will
            constitute your consent to those changes. However, we will not,
            without your consent, use your Personal Information in a manner
            materially different than what was stated at the time your Personal
            Information was collected.
          </span>
          <br></br>
          <br></br>
          <span>Acceptance of this policy</span>
          <br></br>
          <br></br>
          <span>
            You acknowledge that you have read this Policy and agree to all its
            terms and conditions. By accessing and using the Services and
            submitting your information you agree to be bound by this Policy. If
            you do not agree to abide by the terms of this Policy, you are not
            authorized to access or use the Services. This privacy policy was
            created with the help of WebsitePolicies.com
          </span>
          <br></br>
          <br></br>
          <span>Contacting us</span>
          <br></br>
          <br></br>
          <span>
            If you have any questions, concerns, or complaints regarding this
            Policy, the information we hold about you, or if you wish to
            exercise your rights, we encourage you to contact us using the
            details below:
          </span>
          <br></br>
          <br></br>
          <span>https://sliderightNOW.com</span>
          <br></br>
          <span>info@sliderightNOW.com</span>
          <br></br>
          <br></br>
          <span>
            We will attempt to resolve complaints and disputes and make every
            reasonable effort to honor your wish to exercise your rights as
            quickly as possible and in any event, within the timescales provided
            by applicable data protection laws.
          </span>
          <br></br>
          <br></br>
          <span>This document was last updated on September 16, 2022</span>
        </span>
      </div>
      <FooterLight rootClassName="footer-light-root-class-name"></FooterLight>
    </div>
  )
}

export default PrivacyPolicy
