import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import './App.css'
import PopulateUser from '../PopulateUser/PopulateUser'
import Header from '../Header/Header'
import Player from '../Player/Player'
import Login from '../Login/Login'
import Auth from '../Auth/Auth'

const App = () => (
  <Router>
    <div className="App">
      <PopulateUser />
      <Header />

      <main>
        <Switch>
          <Route exact path="/" render={() => <div />} />
          <Route exact path="/login" component={Login} />
          <Route path="/auth/:token" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </main>

      <Player />
    </div>
  </Router>
)

export default App
