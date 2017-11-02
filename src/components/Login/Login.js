import React, { Component } from 'react'
import Icon from '../Icon/Icon'
import './Login.css'

class Login extends Component {
  render = () => (
    <div className="Login box">
      <h4 className="title is-4">Passwordless Login</h4>
      <h6 className="subtitle is-6">
        <a href="#">How does this work?</a>
      </h6>

      <div className="field has-addons">
        <div className="control has-icons-left is-expanded">
          <input className="input" type="email" placeholder="email" />
          <span className="icon is-left">
            <Icon name="envelope" />
          </span>
        </div>
        <div className="control">
          <a className="button is-primary">
            <Icon name="user-circle" />
            <p>Log in</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
