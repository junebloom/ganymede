import React, { Component } from 'react'
import './AddSubscription.css'

class App extends Component {
  state = {
    url: ''
  }

  handleChange = e => this.setState({ url: e.target.value })

  render () {
    return (
      <div className="AddSubscription">
        <input type="text" value={this.state.url} onChange={this.handleChange} placeholder="Enter an RSS/Atom feed url"/>
        <button>Subscribe</button>
      </div>
    )
  }
}

export default App
