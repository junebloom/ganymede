import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="AddSubscription">
        <input type="text" placeholder="Enter an RSS/Atom feed url"/>
        <button>Subscribe</button>
      </div>
    )
  }
}

export default App
