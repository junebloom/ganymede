import React, { Component } from 'react'
import './App.css'
import AddSubscription from '../AddSubscription/AddSubscription'

class App extends Component {
  render () {
    return (
      <div className="App">
        Hey, universe. It's me, you.
        <AddSubscription/>
      </div>
    )
  }
}

export default App
