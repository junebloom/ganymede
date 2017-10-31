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
import TileList from '../TileList/TileList'

const podcasts = [
  {
    imgSrc:
      'http://static1.squarespace.com/static/52d66949e4b0a8cec3bcdd46/t/52ebf67fe4b0f4af2a4502d8/1391195777839/1500w/Hello+Internet.003.png'
  },
  {
    imgSrc:
      'http://static.libsyn.com/p/assets/b/c/4/e/bc4ecd5620a58e47/logo-1400-1400.png'
  },
  {
    imgSrc: 'https://api.adorable.io/avatars/480/a33.png'
  },
  {
    imgSrc: 'https://api.adorable.io/avatars/480/b33.png'
  },
  {
    imgSrc: 'https://api.adorable.io/avatars/480/c33.png'
  },
  {
    imgSrc: 'https://api.adorable.io/avatars/480/d33.png'
  },
  {
    imgSrc: 'https://api.adorable.io/avatars/480/e33.png'
  }
]

const Subscriptions = () => <TileList items={podcasts} />

const App = () => (
  <Router>
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route exact path="/" render={Subscriptions} />
          <Redirect to="/" />
        </Switch>
      </main>

      <Player />
    </div>
  </Router>
)

export default App
