import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PrivacyPolicy from './views/privacy-policy'
import Home from './views/home'
import Contact from './views/contact'
import About from './views/about'
import Content from './views/content'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contact" />
        <Route component={About} exact path="/about" />
        <Route component={Content} exact path="/content" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
