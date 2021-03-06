import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

// Authorizes the user via a login token provided as a URL parameter
// This is where the user lands when clicking a login link in their email
class Auth extends Component {
  state = {
    status: 'ready',
    message: ''
  }

  componentDidMount = async () => {
    this.setState({
      status: 'sending',
      message: 'Authenticating...'
    })

    // HTTP response from auth server
    let res = null

    try {
      res = await fetch('http://localhost:4000/auth', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authToken: this.props.match.params.token })
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
      // Store the new auth token for authorizing future requests
      const authToken = await res.json()
      localStorage.setItem('authToken', authToken)
      this.props.setUser(authToken)
      this.setState({ status: 'success' })
    } else {
      console.error(`${res.status} ${res.statusText}`, res.json())
      this.setState({
        status: 'error',
        message: `Oh no, there was a problem: ${res.status} ${res.statusText}`
      })
    }
  }

  // Show any error status to user
  render = () => {
    let messageClassName = 'has-text-centered'
    if (this.state.status === 'error')
      messageClassName += ' has-text-danger has-text-weight-bold'

    return this.state.status === 'success' ? (
      <Redirect to="/" />
    ) : (
      <p className={messageClassName}>{this.state.message}</p>
    )
  }
}

Auth.propTypes = {
  match: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
}

export default Auth
