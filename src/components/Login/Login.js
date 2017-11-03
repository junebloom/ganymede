import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'
import './Login.css'

class Login extends Component {
  render = () => (
    <div className="Login">
      <h4 className="title is-4">
        <span>Login</span>
        <Icon name="lock" />
      </h4>
      <Link to="/about-passwordless" className="is-6">
        What is passwordless login?
      </Link>

      <div className="field has-addons">
        <div className="control has-icons-left is-expanded">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-left">
            <Icon name="envelope" />
          </span>
        </div>
        <div className="control">
          <button className="button is-primary">Log in</button>
        </div>
      </div>

      <p className="has-text-grey-light">
        Your account is automagically created upon first login.
      </p>
    </div>
  )
}

export default Login
