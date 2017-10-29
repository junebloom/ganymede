import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import Player from '../Player/Player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Player />
      </div>
    )
  }
}

export default App
