import React from 'react'
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

const App = () => (
  <Router>
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route exact path="/" render={() => <div />} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </main>

      <Player />
    </div>
  </Router>
)

export default App
