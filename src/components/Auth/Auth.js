import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

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
    let res = null

    try {
      res = await fetch(
        `http://localhost:4000/auth/${this.props.match.params.token}`,
        { method: 'post' }
      )
    } catch (error) {
      console.error(error)
      this.setState({
        status: 'error',
        message: `Oh no, could not contact the login server.`
      })
      return
    }

    if (res.ok) {
      localStorage.setItem('authToken', await res.json())
      this.setState({ status: 'success' })
    } else {
      console.error(`${res.status} ${res.statusText}`, await res.json())
      this.setState({
        status: 'error',
        message: `Oh no, there was a problem: ${res.status} ${res.statusText}`
      })
    }
  }

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
  match: PropTypes.object.isRequired
}

export default Auth
