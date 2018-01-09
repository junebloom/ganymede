import { Component } from 'react'

// Checks for an auth token in local storage and sets a 'user' global with its payload
// TODO: Ditch the global variable and use proper state management
class PopulateUser extends Component {
  componentWillMount = () => {
    const authToken = localStorage.getItem('authToken')
    if (authToken) {
      const payload = authToken.split('.')[1]
      window.user = JSON.parse(atob(payload))
    }
  }

  render = () => null
}

export default PopulateUser
