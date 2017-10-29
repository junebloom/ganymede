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

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <div>meow</div>} />
        <Redirect to="/" />
      </Switch>
      <Player />
    </div>
  </Router>
)

export default App
