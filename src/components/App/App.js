import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Player from '../Player/Player'
import Login from '../Login/Login'
import Auth from '../Auth/Auth'

class App extends Component {
  state = {
    user: null
  }

  setUser = token => {
    let user = null
    if (token) {
      const payload = token.split('.')[1]
      user = JSON.parse(atob(payload))
    }
    this.setState({ user })
  }

  componentDidMount() {
    this.setUser(localStorage.getItem('authToken'))
  }

  render = () => (
    <Router>
      <div className="App">
        <Header user={this.state.user} setUser={this.setUser} />

        <main>
          <Switch>
            <Route exact path="/" render={() => <div />} />
            <Route exact path="/login" component={Login} />
            <Route
              path="/auth/:token"
              render={props => <Auth setUser={this.setUser} {...props} />}
            />
            <Redirect to="/" />
          </Switch>
        </main>

        <Player />
      </div>
    </Router>
  )
}

export default App
