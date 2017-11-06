import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'
import './Login.css'

class Login extends Component {
  state = {
    email: '',
    status: 'ready',
    message: 'Your account is automagically created upon first login.'
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }

  requestLogin = async event => {
    event.preventDefault()
    this.setState({ status: 'sending' })
    let res = null

    try {
      res = await fetch(`http://localhost:4000/login/${this.state.email}`, {
        method: 'post'
      })
    } catch (error) {
      console.error(error)
      this.setState({
        status: 'error',
        message: `Oh no, could not contact the login server.`
      })
      return
    }

    if (res.ok) {
      this.setState({
        status: 'success',
        message: 'Please check your inbox for your authentication link.'
      })
    } else {
      console.error(`${res.status} ${res.statusText}`, await res.json())
      this.setState({
        status: 'error',
        message: `Oh no, there was a problem: ${res.status} ${res.statusText}`
      })
    }
  }

  render = () => {
    let messageClassName = 'has-text-grey-light'

    if (this.state.status === 'success')
      messageClassName = 'has-text-weight-bold'
    else if (this.state.status === 'error')
      messageClassName = 'has-text-danger has-text-weight-bold'

    return (
      <div className="Login">
        <h4 className="title is-4">
          <span>Login</span>
          <Icon name="lock" />
        </h4>
        <Link to="/about-passwordless">What is passwordless login?</Link>

        {this.state.status === 'success' ? null : (
          <form>
            <div className="field has-addons">
              <div className="control has-icons-left is-expanded">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  disabled={this.state.status === 'sending'}
                />

                <span className="icon is-left">
                  <Icon name="envelope" />
                </span>
              </div>

              <div className="control">
                <button
                  className={`button is-primary${this.state.status === 'sending'
                    ? ' is-loading'
                    : ''}`}
                  onClick={this.requestLogin}
                  disabled={this.state.status === 'sending'}
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
        )}

        <p className={messageClassName}>{this.state.message}</p>
      </div>
    )
  }
}

export default Login
